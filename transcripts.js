/* Interactive timed transcripts; YouTube IFrame API is loaded only on Play. */
const transcriptText={
 en:{title:'Interactive transcript',hint:'Tap a word for its meaning. Use the time button to replay a line.',empty:'This video does not have a timed transcript yet.',upload:'Use your subtitle file',uploadHint:'Choose German subtitles (.srt or .vtt), or a Sprachoo transcript (.json), for this exact video. Files stay in this browser.',choose:'Choose subtitle file',follow:'Follow speech',pause:'Pause on word tap',imported:'Transcript added on this device.',invalid:'Could not read this transcript. Check the file format and timestamps.',noClip:'No subtitle lines fall within this video excerpt.',large:'Choose a subtitle file smaller than 1 MB.',storage:'This browser could not save the transcript. It will work until you close the page.',remove:'Remove my transcript',loading:'Loading video…',error:'The player could not connect. You can still read the transcript or open the video at its source.',meaning:'Word meaning',missing:'This word is not in the offline dictionary yet.',context:'In this sentence',dictionary:'Dictionary meaning — the sense may vary with context.',save:'Save word and sentence',saved:'Saved to My Vocabulary',resume:'Close and continue',close:'Close translation',replay:'Replay line',translate:'Translation',add:'Add a meaning',en:'English meaning',az:'Azerbaijani meaning',manual:'Add both meanings to save this word.',source:'From video',level:'Level',read:'Transcript',ready:'Press Play to watch with the transcript.',playing:'Playing',paused:'Paused',ended:'Excerpt finished',reset:'Use published transcript',unknownSave:'Enter both meanings first.',invalidWord:'Please enter meanings shorter than 500 characters.'},
 az:{title:'İnteraktiv mətn',hint:'Tərcümə üçün sözə toxun. Sətri yenidən dinləmək üçün vaxt düyməsinə bas.',empty:'Bu videoya hələ vaxt işarəli mətn əlavə edilməyib.',upload:'Öz altyazı faylından istifadə et',uploadHint:'Bu videoya uyğun almanca altyazı (.srt və ya .vtt) və ya Sprachoo mətni (.json) seç. Fayl bu brauzerdə qalır.',choose:'Altyazı faylını seç',follow:'Danışığı izlə',pause:'Sözə toxunanda dayandır',imported:'Mətn bu cihaza əlavə edildi.',invalid:'Mətni oxumaq mümkün olmadı. Fayl formatını və vaxt işarələrini yoxla.',noClip:'Bu video hissəsinə uyğun altyazı sətri tapılmadı.',large:'1 MB-dan kiçik altyazı faylı seç.',storage:'Brauzer mətni yadda saxlaya bilmədi. Səhifə bağlanana qədər işləyəcək.',remove:'Əlavə etdiyim mətni sil',loading:'Video yüklənir…',error:'Pleyerə qoşulmaq mümkün olmadı. Mətni oxuya və ya videonu mənbədə aça bilərsən.',meaning:'Sözün mənası',missing:'Bu söz hələ oflayn lüğətdə yoxdur.',context:'Bu cümlədə',dictionary:'Lüğət mənası — kontekstdən asılı olaraq dəyişə bilər.',save:'Sözü və cümləni saxla',saved:'Söz dəftərinə əlavə edildi',resume:'Bağla və davam et',close:'Tərcüməni bağla',replay:'Sətri yenidən dinlə',translate:'Tərcümə',add:'Məna əlavə et',en:'İngiliscə məna',az:'Azərbaycanca məna',manual:'Sözü saxlamaq üçün hər iki mənanı əlavə et.',source:'Videodan',level:'Səviyyə',read:'Mətn',ready:'Videonu mətnlə izləmək üçün Başlat düyməsinə bas.',playing:'Səsləndirilir',paused:'Dayandırılıb',ended:'Hissə bitdi',reset:'Yayımlanmış mətndən istifadə et',unknownSave:'Əvvəlcə hər iki mənanı daxil et.',invalidWord:'Mənalar 500 simvoldan qısa olmalıdır.'}
};
function tt(k){return transcriptText[translationLanguage][k]||k;}
const transcriptMemory={};
let activeTranscriptPlayer=null,transcriptGeneration=0,youtubeAPIPromise=null,transcriptPopup=null;
const transcriptPreferences={follow:safeGet('sprachoo-transcript-follow','yes')!=='no',pause:safeGet('sprachoo-transcript-pause','yes')!=='no'};
function subtitleTime(text){
 const parts=text.trim().replace(',','.').split(':').map(Number);
 if(parts.length<2||parts.length>3||parts.some(n=>!Number.isFinite(n)||n<0)||parts.at(-1)>=60||parts.at(-2)>=60)return NaN;
 return parts.reduce((sum,n)=>sum*60+n,0);
}
function plainSubtitle(text){
 return String(text).replace(/<[^>]*>/g,'').replace(/\{\\[^}]*\}/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
}
function normalizeTranscript(input){
 const source=Array.isArray(input)?{cues:input}:input;
 if(!source||!Array.isArray(source.cues)||source.cues.length>3000)throw Error('Invalid cues');
 const cues=source.cues.map(c=>{
  if(!c||typeof c.text!=='string'||typeof c.start!=='number'||typeof c.end!=='number'||!Number.isFinite(c.start)||!Number.isFinite(c.end)||c.start<0||c.end<=c.start||c.end>86400||c.text.length>2000)throw Error('Invalid cue');
  const text=plainSubtitle(c.text);if(!text)throw Error('Empty cue');
  const result={start:c.start,end:c.end,text};
  if(c.glosses&&typeof c.glosses==='object'&&!Array.isArray(c.glosses)){
   result.glosses={};for(const [token,g] of Object.entries(c.glosses).slice(0,150)){
    if(!g||typeof g.de!=='string'||typeof g.az!=='string'||typeof g.en!=='string'||![g.de,g.az,g.en].every(v=>v.trim()&&v.length<=500))continue;
    result.glosses[token.toLocaleLowerCase('de-DE')]={de:g.de,az:g.az,en:g.en,plural:typeof g.plural==='string'?g.plural.slice(0,200):'',forms:typeof g.forms==='string'?g.forms.slice(0,300):''};
   }
  }
  return result;
 }).sort((a,b)=>a.start-b.start||a.end-b.end);
 if(!cues.length)throw Error('Empty transcript');
 return {cues};
}
function parseSubtitleFile(text,filename){
 if(text.length>1000000)throw Error('File too large');
 text=text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n');
 if(/\.json$/i.test(filename)||/^\s*[\[{]/.test(text))return normalizeTranscript(JSON.parse(text));
 const cues=[];
 for(const block of text.split(/\n\s*\n/)){
  const lines=block.trim().split('\n');
  if(/^(WEBVTT|NOTE|STYLE|REGION)(?:\s|$)/.test(lines[0]))continue;
  const i=lines.findIndex(l=>l.includes('-->'));if(i<0)continue;
  const match=lines[i].match(/^\s*((?:\d{1,2}:)?\d{2}:\d{2}[.,]\d{3})\s+-->\s+((?:\d{1,2}:)?\d{2}:\d{2}[.,]\d{3})(?:\s.*)?$/);
  if(!match)throw Error('Invalid timing');
  cues.push({start:subtitleTime(match[1]),end:subtitleTime(match[2]),text:lines.slice(i+1).join(' ')});
 }
 return normalizeTranscript({cues});
}
function transcriptFor(m){
 const key=m.youtube;if(!key)return null;
 if(Object.hasOwn(transcriptMemory,key))return transcriptMemory[key];
 const stored=safeGet('sprachoo-transcript-'+key,'');
 try{if(stored)return transcriptMemory[key]=normalizeTranscript(JSON.parse(stored));}catch{}
 try{if(publishedVideoTranscripts[key])return normalizeTranscript(publishedVideoTranscripts[key]);}catch{}
 return null;
}
function cuesForClip(m){return (transcriptFor(m)?.cues||[]).filter(c=>c.end>m.start&&c.start<m.end).map(c=>({...c,start:Math.max(m.start,c.start),end:Math.min(m.end,c.end)}));}
function activeCueIndex(cues,time){
 // Prefer the latest-starting cue when source subtitle tracks overlap.
 for(let i=cues.length-1;i>=0;i--)if(cues[i].start<=time&&time<cues[i].end)return i;
 return -1;
}
function transcriptTokens(text){return [...text.matchAll(/\p{L}+(?:[-’']\p{L}+)*|[^\p{L}]+/gu)].map(m=>({text:m[0],word:/^\p{L}/u.test(m[0])}));}
function videoTranscriptHTML(m){
 const cues=cuesForClip(m),local=!!safeGet('sprachoo-transcript-'+m.youtube,'')||Object.hasOwn(transcriptMemory,m.youtube);
 return `<section class="video-transcript" data-transcript="${m.id}" aria-label="${tt('title')}"><div class="transcript-heading"><h4>${tt('title')}</h4><span id="transcript-state-${m.id}" class="transcript-state">${tt('ready')}</span></div><p>${tt('hint')}</p><div class="transcript-settings"><label><input type="checkbox" data-transcript-follow ${transcriptPreferences.follow?'checked':''}> ${tt('follow')}</label><label><input type="checkbox" data-transcript-pause ${transcriptPreferences.pause?'checked':''}> ${tt('pause')}</label></div><div class="transcript-lines" id="transcript-lines-${m.id}" tabindex="0" aria-label="${tt('read')}">${cues.length?cues.map((c,i)=>`<div class="transcript-line" data-cue-line="${i}"><button type="button" class="transcript-time" data-cue-seek="${m.id}:${i}" aria-label="${tt('replay')} ${clipTime(c.start)}">${clipTime(c.start)}</button><p lang="de">${transcriptTokens(c.text).map((token,j)=>token.word?`<button type="button" class="transcript-word" data-transcript-word="${m.id}:${i}:${j}" aria-haspopup="dialog" aria-controls="transcriptWordPopup" aria-expanded="false">${escapeHtml(token.text)}</button>`:escapeHtml(token.text)).join('')}</p></div>`).join(''):`<p class="transcript-empty">${tt(transcriptFor(m)?'noClip':'empty')}</p>`}</div><details class="transcript-import"><summary>${tt('upload')}</summary><p>${tt('uploadHint')}</p><label class="btn secondary">${tt('choose')}<input type="file" accept=".srt,.vtt,.json,text/vtt,application/json" data-subtitle-upload="${m.id}"></label>${local?`<button type="button" class="btn secondary" data-remove-transcript="${m.id}">${tt('remove')}</button>`:''}</details><p id="transcript-message-${m.id}" role="status"></p></section>`;
}
function loadYouTubeAPI(){
 if(window.YT?.Player)return Promise.resolve(window.YT);
 if(youtubeAPIPromise)return youtubeAPIPromise;
 youtubeAPIPromise=new Promise((resolve,reject)=>{
  const script=document.createElement('script');let settled=false;
  const previous=window.onYouTubeIframeAPIReady;
  const done=(error)=>{if(settled)return;settled=true;clearTimeout(timeout);if(error){script.remove();youtubeAPIPromise=null;reject(error);}else resolve(window.YT);};
  const timeout=setTimeout(()=>done(Error('Player timed out')),12000);
  window.onYouTubeIframeAPIReady=()=>{if(typeof previous==='function'){try{previous();}catch{}}if(window.YT?.Player)done();else done(Error('Missing API'));};
  script.src='https://www.youtube.com/iframe_api';script.async=true;script.onerror=()=>done(Error('Player unavailable'));document.head.appendChild(script);
 });return youtubeAPIPromise;
}
function destroyTranscriptPlayer(){
 transcriptGeneration++;closeTranscriptPopup(false);
 const active=activeTranscriptPlayer;activeTranscriptPlayer=null;
 if(active){clearInterval(active.timer);clearTimeout(active.timeout);try{active.player?.destroy();}catch{}const box=$('#transcript-lines-'+active.media.id);box?.querySelectorAll('[data-cue-line]').forEach(el=>{el.classList.remove('is-speaking');el.removeAttribute('aria-current');});const label=$('#transcript-state-'+active.media.id);if(label)label.textContent=tt('paused');}
}
function syncTranscript(active){
 if(active!==activeTranscriptPlayer||!active.ready)return;
 const player=active.player,m=active.media,time=player.getCurrentTime();
 if(!Number.isFinite(time))return;
 if(time>=m.end&&player.getPlayerState()===1){player.pauseVideo();$('#transcript-state-'+m.id).textContent=tt('ended');}
 if(time<m.start-.2&&player.getPlayerState()===1)player.seekTo(m.start,true);
 const index=activeCueIndex(cuesForClip(m),time);
 if(index===active.line)return;
 active.line=index;
 const container=$('#transcript-lines-'+m.id);if(!container)return;
 container.querySelectorAll('[data-cue-line]').forEach(el=>{const current=Number(el.dataset.cueLine)===index;el.classList.toggle('is-speaking',current);if(current)el.setAttribute('aria-current','true');else el.removeAttribute('aria-current');});
 const row=container.querySelector(`[data-cue-line="${index}"]`);
 if(row&&transcriptPreferences.follow&&!transcriptPopup&&!container.contains(document.activeElement)){
  const y=row.getBoundingClientRect().top-container.getBoundingClientRect().top+container.scrollTop;
  container.scrollTo({top:Math.max(0,y-container.clientHeight/3),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 }
}
async function startTranscriptVideo(m,button,start=m.start){
 stopCourseMedia();const generation=transcriptGeneration,frame=$('#frame-'+m.id);button.disabled=true;
 $('#transcript-state-'+m.id).textContent=tt('loading');
 try{
  const YT=await loadYouTubeAPI();if(generation!==transcriptGeneration||!frame.isConnected)return;
  const holder=document.createElement('div');holder.id='yt-transcript-player-'+generation;frame.appendChild(holder);
  const active={media:m,player:null,line:-2,timer:null,ready:false};activeTranscriptPlayer=active;
  active.player=new YT.Player(holder,{host:'https://www.youtube-nocookie.com',videoId:m.youtube,width:'100%',height:'270',playerVars:{playsinline:1,rel:0,start:Math.floor(start),end:m.end,origin:window.location.origin},events:{
   onReady:event=>{if(active!==activeTranscriptPlayer)return;active.player=event.target;active.ready=true;clearTimeout(active.timeout);button.disabled=false;button.textContent=tt('replay');event.target.seekTo(start,true);event.target.playVideo();active.timer=setInterval(()=>syncTranscript(active),120);syncTranscript(active);},
   onStateChange:event=>{if(active!==activeTranscriptPlayer)return;$('#transcript-state-'+m.id).textContent=tt(event.data===1?'playing':event.data===0?'ended':'paused');if(event.data===1)document.querySelectorAll('audio').forEach(a=>a.pause());syncTranscript(active);},
   onError:()=>{if(active!==activeTranscriptPlayer)return;clearTimeout(active.timeout);button.disabled=false;$('#transcript-state-'+m.id).textContent=tt('error');}
  }});
  active.timeout=setTimeout(()=>{if(active===activeTranscriptPlayer&&!active.ready){button.disabled=false;$('#transcript-state-'+m.id).textContent=tt('error');}},12000);
 }catch{if(generation===transcriptGeneration&&frame.isConnected){$('#transcript-state-'+m.id).textContent=tt('error');button.disabled=false;}}
 finally{if(frame.isConnected)button.disabled=false;}
}
function lookupTranscriptWord(surface,cue){
 const lower=surface.toLocaleLowerCase('de-DE');
 if(cue.glosses?.[lower])return {...cue.glosses[lower],contextual:true};
 const contextual=storyEntry(surface,cue.text);if(contextual&&contextual.az&&contextual.en)return {...contextual,contextual:false};
 const personal=typeof savedWords!=='undefined'&&savedWords.find(w=>w.de.toLocaleLowerCase('de-DE')===lower);if(personal)return {...personal,contextual:false};
 const matches=words.filter(w=>w.de.toLocaleLowerCase('de-DE').replace(/^(der|die|das)\s+/,'')===lower||w.de.toLocaleLowerCase('de-DE')===lower);
 return matches.length===1?{...matches[0],contextual:false}:null;
}
function closeTranscriptPopup(restore=true,resume=false){
 const state=transcriptPopup;transcriptPopup=null;const popup=$('#transcriptWordPopup');if(popup)popup.hidden=true;
 if(state){state.button.setAttribute('aria-expanded','false');if(restore&&state.button.isConnected)state.button.focus({preventScroll:true});if(resume&&state.resume&&activeTranscriptPlayer?.media.id===state.media.id&&activeTranscriptPlayer.ready)activeTranscriptPlayer.player.playVideo();}
}
function positionTranscriptPopup(){
 if(!transcriptPopup)return;const popup=$('#transcriptWordPopup'),rect=transcriptPopup.button.getBoundingClientRect(),viewport=window.visualViewport;
 const top=viewport?.offsetTop||0,left=viewport?.offsetLeft||0,width=viewport?.width||window.innerWidth,height=viewport?.height||window.innerHeight;
 popup.style.maxWidth=Math.max(1,width-24)+'px';popup.style.maxHeight=Math.max(1,height-24)+'px';
 if(rect.bottom<top||rect.top>top+height){closeTranscriptPopup(false);return;}
 const size=popup.getBoundingClientRect();popup.style.left=Math.max(left+12,Math.min(rect.left,left+width-size.width-12))+'px';popup.style.top=Math.max(top+12,Math.min(rect.top-size.height-10>=top+12?rect.top-size.height-10:rect.bottom+10,top+height-size.height-12))+'px';
}
function openTranscriptWord(button){
 const [id,i,j]=button.dataset.transcriptWord.split(':'),m=mediaActivities.find(x=>x.id===id);if(!m)return;
 const cue=cuesForClip(m)[Number(i)],token=cue&&transcriptTokens(cue.text)[Number(j)];if(!token?.word)return;
 const oldResume=transcriptPopup?.resume&&transcriptPopup.media.id===m.id;closeTranscriptPopup(false);closeWordPopup(false);
 const active=activeTranscriptPlayer,playing=active?.media.id===m.id&&active.ready&&active.player.getPlayerState()===1;
 const resume=transcriptPreferences.pause&&(playing||oldResume);if(playing&&transcriptPreferences.pause)active.player.pauseVideo();
 const entry=lookupTranscriptWord(token.text,cue);transcriptPopup={button,media:m,cue,token:token.text,entry,resume};button.setAttribute('aria-expanded','true');
 const popup=$('#transcriptWordPopup');
 popup.innerHTML=`<div class="word-popup-top"><span>${tt('meaning')}</span><button type="button" data-close-transcript aria-label="${tt('close')}">×</button></div><h3 id="transcriptPopupTitle" lang="de">${escapeHtml(entry?.de||token.text)}</h3>${entry?`<p class="popup-meaning">${escapeHtml(meaning(entry))}</p>${entry.plural?`<p>${st('plural')}: ${escapeHtml(entry.plural)}</p>`:''}${entry.forms?`<p>${st('forms')}: ${escapeHtml(entry.forms)}</p>`:''}${entry.contextual?'':`<small>${tt('dictionary')}</small>`}`:`<p>${tt('missing')}</p><details open><summary>${tt('add')}</summary><p>${tt('manual')}</p><label>${tt('en')}<input id="transcriptManualEn" maxlength="500"></label><label>${tt('az')}<input id="transcriptManualAz" maxlength="500"></label></details>`}<p class="transcript-context"><small>${tt('context')}</small><span lang="de">${escapeHtml(cue.text)}</span></p><div class="popup-actions"><button type="button" class="speaker-btn" data-transcript-speak aria-label="${escapeHtml(token.text)}">♪</button><button type="button" class="btn primary" data-save-transcript>${tt('save')}</button></div><p id="transcriptSaveStatus" role="status"></p>${resume?`<button type="button" class="btn secondary" data-resume-transcript>${tt('resume')} ▶</button>`:''}`;
 popup.hidden=false;positionTranscriptPopup();popup.querySelector('[data-close-transcript]').focus({preventScroll:true});
}
function saveTranscriptWord(){
 const p=transcriptPopup;if(!p)return;let entry=p.entry;
 if(!entry){const en=$('#transcriptManualEn').value.trim(),az=$('#transcriptManualAz').value.trim();if(!en||!az){$('#transcriptSaveStatus').textContent=tt('unknownSave');return;}if(en.length>500||az.length>500){$('#transcriptSaveStatus').textContent=tt('invalidWord');return;}entry={de:p.token,en,az};}
 savePersonalWord({...entry,level:p.media.level,context:p.cue.text,sourceURL:p.media.url});
 $('#transcriptSaveStatus').textContent=tt('saved');positionTranscriptPopup();
}
document.addEventListener('click',e=>{
 const word=e.target.closest('[data-transcript-word]');if(word){openTranscriptWord(word);return;}
 const seek=e.target.closest('[data-cue-seek]');if(seek){const [id,index]=seek.dataset.cueSeek.split(':'),m=mediaActivities.find(x=>x.id===id),cue=m&&cuesForClip(m)[Number(index)];if(!cue)return;closeTranscriptPopup(false);if(activeTranscriptPlayer?.media.id===id&&activeTranscriptPlayer.ready){activeTranscriptPlayer.player.seekTo(cue.start,true);activeTranscriptPlayer.player.playVideo();syncTranscript(activeTranscriptPlayer);}else startTranscriptVideo(m,document.querySelector(`[data-play-media="${id}"]`),cue.start);return;}
 if(e.target.closest('[data-close-transcript]')){closeTranscriptPopup();return;}
 if(e.target.closest('[data-resume-transcript]')){closeTranscriptPopup(true,true);return;}
 if(e.target.closest('[data-save-transcript]')){saveTranscriptWord();return;}
 if(e.target.closest('[data-transcript-speak]')){if(transcriptPopup)speak(transcriptPopup.entry?.de||transcriptPopup.token);return;}
 const remove=e.target.closest('[data-remove-transcript]');if(remove){const m=mediaActivities.find(x=>x.id===remove.dataset.removeTranscript);if(!m)return;stopCourseMedia();delete transcriptMemory[m.youtube];try{localStorage.removeItem('sprachoo-transcript-'+m.youtube);}catch{}renderMedia();return;}
 if(transcriptPopup&&!e.target.closest('#transcriptWordPopup'))closeTranscriptPopup(false);
});
document.addEventListener('change',async e=>{
 if(e.target.matches('[data-transcript-follow],[data-transcript-pause]')){
  const key=e.target.hasAttribute('data-transcript-follow')?'follow':'pause';transcriptPreferences[key]=e.target.checked;safeSet('sprachoo-transcript-'+key,e.target.checked?'yes':'no');document.querySelectorAll('[data-transcript-'+key+']').forEach(el=>el.checked=e.target.checked);return;
 }
 const input=e.target.closest('[data-subtitle-upload]');if(!input)return;
 const m=mediaActivities.find(x=>x.id===input.dataset.subtitleUpload),file=input.files?.[0];if(!m||!file)return;
 const status=$('#transcript-message-'+m.id);if(file.size>1000000){status.textContent=tt('large');input.value='';return;}
 try{
  const data=parseSubtitleFile(await file.text(),file.name);if(!data.cues.some(c=>c.end>m.start&&c.start<m.end))throw Error('No matching cues');
  if(!input.isConnected)return;transcriptMemory[m.youtube]=data;let stored=true;
  try{localStorage.setItem('sprachoo-transcript-'+m.youtube,JSON.stringify(data));}catch{stored=false;}
  stopCourseMedia();renderMedia();$('#transcript-message-'+m.id).textContent=tt(stored?'imported':'storage');
 }catch{if(input.isConnected)status.textContent=tt('invalid');}finally{input.value='';}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&transcriptPopup){e.preventDefault();closeTranscriptPopup();}});
window.addEventListener('resize',positionTranscriptPopup);window.addEventListener('scroll',positionTranscriptPopup,true);
window.visualViewport?.addEventListener('resize',positionTranscriptPopup);window.visualViewport?.addEventListener('scroll',positionTranscriptPopup);
