// Device-provided speech voices; no external API key is needed.
const audioText={
 en:{title:'Voice & speed',voice:'German voice',speed:'Playback speed',slow:'Slow · 0.75×',normal:'Normal · 1×',fast:'Fast · 1.25×',auto:'Automatic',defaultVoice:'Default German voice',preview:'Try voice',hint:'Applies to stories, words and quizzes. Voice quality depends on your device. Changing settings during a story repeats the current sentence.',none:'No German voice is listed yet. Your browser will try its default German speech service.',unsupported:'Speech is not supported in this browser.',error:'Audio could not play. Try another voice.',sample:'Guten Morgen! Heute lernen wir gemeinsam Deutsch.'},
 az:{title:'Səs və sürət',voice:'Almanca səs',speed:'Oxuma sürəti',slow:'Yavaş · 0.75×',normal:'Normal · 1×',fast:'Sürətli · 1.25×',auto:'Avtomatik',defaultVoice:'Standart almanca səs',preview:'Səsi sına',hint:'Hekayələrə, sözlərə və quizlərə aiddir. Səsin keyfiyyəti cihazından asılıdır. Hekayə zamanı dəyişiklik etsən, cari cümlə yenidən oxunacaq.',none:'Hələ almanca səs siyahıda yoxdur. Brauzer standart almanca səs xidmətini sınayacaq.',unsupported:'Bu brauzerdə səsləndirmə dəstəklənmir.',error:'Səs oxunmadı. Başqa səs seç.',sample:'Guten Morgen! Heute lernen wir gemeinsam Deutsch.'}
};
let speechRate=1,speechVoiceKey='',germanVoices=[];
function at(key){return audioText[translationLanguage][key];}
function voiceKey(voice){return voice.voiceURI||voice.name+'|'+voice.lang;}
function germanVoiceList(voices){return voices.filter(v=>/^de(?:[-_]|$)/i.test(v.lang));}
function preferredVoice(voices,key){
 const selected=voices.find(v=>voiceKey(v)===key);if(selected)return selected;
 // Voice names sometimes identify enhanced engines. This is a preference,
 // not a quality guarantee; the learner can preview every available voice.
 return [...voices].sort((a,b)=>{
  const rank=v=>(/natural|neural|online|enhanced|premium/i.test(v.name)?10:0)+(/^de-DE$/i.test(v.lang)?2:0)+(v.default?1:0);
  return rank(b)-rank(a);
 })[0]||null;
}
function configureSpeech(utterance){
 const voice=preferredVoice(germanVoices,speechVoiceKey);
 if(voice)utterance.voice=voice;
 utterance.lang=voice?.lang||'de-DE';utterance.rate=speechRate;utterance.pitch=1;utterance.volume=1;
 return utterance;
}
function renderAudioUI(){
 document.querySelectorAll('[data-audio-text]').forEach(el=>el.textContent=at(el.dataset.audioText));
 const speed=$('#speechSpeed');speed.innerHTML=[['0.75','slow'],['1','normal'],['1.25','fast']].map(([value,key])=>`<option value="${value}">${at(key)}</option>`).join('');speed.value=String(speechRate);
 const select=$('#speechVoice'),automatic=preferredVoice(germanVoices,'');
 select.innerHTML=`<option value="">${at('auto')} · ${escapeHtml(automatic?.name||at('defaultVoice'))}</option>`+germanVoices.map(voice=>`<option value="${escapeHtml(voiceKey(voice))}">${escapeHtml(voice.name)} (${escapeHtml(voice.lang)})</option>`).join('');
 select.value=germanVoices.some(v=>voiceKey(v)===speechVoiceKey)?speechVoiceKey:'';
 const supported='speechSynthesis' in window;
 select.disabled=!supported||!germanVoices.length;speed.disabled=!supported;$('#previewVoice').disabled=!supported;
 $('#audioStatus').textContent=!supported?at('unsupported'):germanVoices.length?'':at('none');
}
function refreshGermanVoices(){
 if('speechSynthesis' in window)germanVoices=germanVoiceList(window.speechSynthesis.getVoices());
 renderAudioUI();
}
function applyAudioChange(){
 safeSet('deutsch250-speech-rate',String(speechRate));safeSet('deutsch250-speech-voice',speechVoiceKey);
 const resume=storySpeaking,index=storySentenceIndex;
 cancelStorySpeech();if('speechSynthesis' in window)window.speechSynthesis.cancel();
 renderAudioUI();if(resume)playStory(index);
}
function showAudioError(event){if(!['canceled','interrupted'].includes(event?.error))$('#audioStatus').textContent=at('error');}
function initAudio(){
 const saved=Number(safeGet('deutsch250-speech-rate','1'));speechRate=[.75,1,1.25].includes(saved)?saved:1;
 speechVoiceKey=safeGet('deutsch250-speech-voice','');
 $('#speechSpeed').addEventListener('change',()=>{const rate=Number($('#speechSpeed').value);if(![.75,1,1.25].includes(rate))return;speechRate=rate;applyAudioChange();});
 $('#speechVoice').addEventListener('change',()=>{speechVoiceKey=$('#speechVoice').value;applyAudioChange();});
 $('#previewVoice').addEventListener('click',()=>{cancelStorySpeech();speak(at('sample'));});
 if('speechSynthesis' in window)window.speechSynthesis.addEventListener('voiceschanged',refreshGermanVoices);
 refreshGermanVoices();
}
