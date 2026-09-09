const storyUI = {
 en:{nav:'Stories',title:'Read a little. Learn in context.',intro:'10 short stories · A2–B1. Tap any word for its translation and forms.',choose:'Choose a story',hint:'Tap a word. Its translation appears above it.',listen:'Listen to story',stop:'Stop audio',questions:'Check your understanding',correct:'Correct!',incorrect:'Correct answer:',score:'correct',close:'Close translation',plural:'Plural',noPlural:'Usually no plural in this meaning',forms:'Irregular verb forms',formLabels:'he/she/it · simple past · perfect',inText:'In the story',base:'Base form',save:'Add to review',saved:'In your review queue',translation:'Word translation',read:'Read stories',noun:'Noun',verb:'Verb',name:'Name',word:'Word',count:'words'},
 az:{nav:'Hekayələr',title:'Oxu və sözləri mətn içində öyrən.',intro:'10 qısa hekayə · A2–B1. Tərcümə və formalar üçün istənilən sözə toxun.',choose:'Hekayə seç',hint:'Sözə toxun. Tərcüməsi yuxarıda görünəcək.',listen:'Hekayəni dinlə',stop:'Səsi dayandır',questions:'Nə başa düşdün?',correct:'Doğrudur!',incorrect:'Düzgün cavab:',score:'düzgün cavab',close:'Tərcüməni bağla',plural:'Cəm',noPlural:'Bu mənada adətən cəmi işlənmir',forms:'Qaydasız fel formaları',formLabels:'o (indiki zaman) · keçmiş zaman · perfekt',inText:'Hekayədə',base:'Əsas forma',save:'Təkrara əlavə et',saved:'Təkrar siyahısındadır',translation:'Sözün tərcüməsi',read:'Hekayələri oxu',noun:'İsim',verb:'Fel',name:'Ad',word:'Söz',count:'söz'}
};
let selectedStory=0,storyAnswers={},storyTokens=[],popupTarget=null,popupIndex=null,storySpeaking=false,storySpeechGeneration=0,storySentenceIndex=0;
const storyStudyItems=[];
const storyEntryItems=new Map();
function st(key){return storyUI[translationLanguage][key];}
// Explicit contextual entries avoid guessing inflections or confusing nouns and verbs.
function storyEntry(surface,sentence){
 const lower=surface.toLocaleLowerCase('de-DE');
 if(surface==='Treffen')return storyLexicon['@meeting'];
 if(surface==='Essen')return storyLexicon['@food'];
 if(surface==='Pflanzen')return storyLexicon['@plant'];
 if(surface==='Morgen' && /(?:am|seinen) Morgen/i.test(sentence))return storyLexicon['@morning'];
 if(surface==='fragen')return storyLexicon['@ask'];
 const rules=[
  ['ruft','an','@anrufen'],['lädt','ein','@einladen'],['zieht','an','@anziehen'],['fährt','ab','@abfahren'],
  ['steht','auf','@aufstehen'],['schreibt','auf','@aufschreiben'],['schlägt','vor','@vorschlagen'],
  ['kehrt','zurück','@zurückkehren'],['lernt','kennen','@kennenlernen'],['fragen','nach','@nachfragen'],['hören','zu','@zuhören']
 ];
 for(const [verb,particle,key] of rules){
  if((lower===verb||lower===particle)&&new RegExp('\\b'+verb+'\\b[^.!?]*\\b'+particle+'\\b','i').test(sentence))return storyLexicon[key];
 }
 return storyLexicon[lower];
}
function tokenizeStory(text){
 const result=[];let cursor=0;
 for(const match of text.matchAll(/\p{L}+/gu)){
  if(match.index>cursor)result.push({text:text.slice(cursor,match.index)});
  const before=text.slice(0,match.index),start=Math.max(before.lastIndexOf('.'),before.lastIndexOf('!'),before.lastIndexOf('?'),before.lastIndexOf('\n'))+1;
  const rest=text.slice(match.index),end=rest.search(/[.!?\n]/);
  const sentence=text.slice(start,end<0?text.length:match.index+end+1).trim();
  result.push({text:match[0],entry:storyEntry(match[0],sentence),sentence,word:true});cursor=match.index+match[0].length;
 }
 if(cursor<text.length)result.push({text:text.slice(cursor)});
 return result;
}
function entryIdentity(entry){return entry.de+'|'+entry.en;}
function initStoryVocabulary(){
 for(const story of stories){
  for(const token of tokenizeStory(story.text)){
   if(!token.word)continue;
   if(!token.entry)throw Error('Missing story translation: '+token.text);
   const e=token.entry,key=entryIdentity(e);if(storyEntryItems.has(key))continue;
   const known=words.find(w=>w.de===e.de && ((e.kind==='n'&&w.type==='noun')||(e.kind==='v'&&w.type==='verb')));
   const item=known||{id:'storyword-'+encodeURIComponent(key),de:e.de,en:e.en,az:e.az,level:story.level,sourceStory:true,examples:[]};
   storyEntryItems.set(key,item);
   if(!known)storyStudyItems.push(item);
  }
 }
}
function storyItem(token){return storyEntryItems.get(entryIdentity(token.entry));}
function renderStory(){
 closeWordPopup(false);cancelStorySpeech();
 const story=stories[selectedStory];storyTokens=tokenizeStory(story.text);
 $('#storyTitle').textContent=story.title;
 $('#storyMeta').textContent=`${story.level} · ${storyTokens.filter(t=>t.word).length} ${st('count')}`;
 let index=0;
 $('#storyText').innerHTML=story.text.split('\n\n').map(paragraph=>'<p>'+tokenizeStory(paragraph).map(token=>{
  if(!token.word)return escapeHtml(token.text);
  // Index into the full story's words, independently of punctuation nodes.
  return `<button type="button" class="story-word" data-story-word="${index++}" lang="de" aria-haspopup="dialog" aria-controls="wordPopup" aria-expanded="false">${escapeHtml(token.text)}</button>`;
 }).join('')+'</p>').join('');
 renderStoryQuestions();
}
function renderStoryQuestions(){
 const story=stories[selectedStory],answers=storyAnswers[story.id]||{};
 $('#storyQuestions').innerHTML=story.questions.map((q,i)=>{
  const answered=Object.hasOwn(answers,i),chosen=answers[i];
  return `<fieldset class="story-question"><legend lang="de">${i+1}. ${escapeHtml(q.q)}</legend><div class="story-options">${q.options.map((option,j)=>`<button type="button" lang="de" data-story-answer="${i}:${j}" ${answered?'disabled':''} class="${answered&&j===q.correct?'answer-correct':answered&&j===chosen?'answer-wrong':''}">${escapeHtml(option)}</button>`).join('')}</div>${answered?`<p class="story-answer-feedback">${chosen===q.correct?st('correct'):st('incorrect')+' <span lang="de">'+escapeHtml(q.options[q.correct])+'</span>'}</p>`:''}</fieldset>`;
 }).join('');
 $('#storyScore').textContent=`${story.questions.filter((q,i)=>answers[i]===q.correct).length} / 3 ${st('score')}`;
}
function closeWordPopup(restoreFocus=true){
 const popup=$('#wordPopup');if(!popup)return;
 popup.hidden=true;
 if(popupTarget){popupTarget.setAttribute('aria-expanded','false');popupTarget.classList.remove('word-selected');if(restoreFocus&&popupTarget.isConnected)popupTarget.focus({preventScroll:true});}
 popupTarget=null;popupIndex=null;
}
function positionWordPopup(){
 if(!popupTarget)return;
 const popup=$('#wordPopup'),rect=popupTarget.getBoundingClientRect();
 const viewport=window.visualViewport;
 const width=viewport?.width||window.innerWidth,height=viewport?.height||window.innerHeight;
 const leftOffset=viewport?.offsetLeft||0,topOffset=viewport?.offsetTop||0;
 if(rect.bottom<topOffset||rect.top>height+topOffset){closeWordPopup(false);return;}
 popup.style.maxWidth=Math.max(1,width-24)+'px';popup.style.maxHeight=Math.max(1,height-24)+'px';
 const size=popup.getBoundingClientRect();
 const left=Math.max(leftOffset+12,Math.min(rect.left+rect.width/2-size.width/2,leftOffset+width-size.width-12));
 const above=rect.top-size.height-12>=topOffset+12;
 const top=above?rect.top-size.height-12:Math.min(rect.bottom+12,topOffset+height-size.height-12);
 popup.style.left=left+'px';popup.style.top=Math.max(topOffset+12,top)+'px';
 popup.dataset.placement=above?'above':'below';
}
function openWordPopup(button){
 const index=Number(button.dataset.storyWord),token=storyTokens.filter(t=>t.word)[index];if(!token?.entry)return;
 closeWordPopup(false);popupTarget=button;popupIndex=index;button.classList.add('word-selected');button.setAttribute('aria-expanded','true');
 const entry=token.entry,item=storyItem(token),saved=Boolean(reviewData[itemKey(item)]);
 $('#wordPopup').innerHTML=`<div class="word-popup-top"><span>${st('inText')}: <b lang="de">${escapeHtml(token.text)}</b></span><button type="button" id="closeWordPopup" aria-label="${st('close')}">×</button></div><h3 id="wordPopupTitle" lang="de">${escapeHtml(entry.de)}</h3><p class="popup-meaning" lang="${translationLanguage}">${escapeHtml(meaning(entry))}</p>${entry.plural?`<div class="popup-grammar"><b>${st('plural')}</b><span lang="de">${entry.plural==='—'?st('noPlural'):escapeHtml(entry.plural)}</span></div>`:''}${entry.forms?`<div class="popup-grammar"><b>${st('forms')}</b><span lang="de">${escapeHtml(entry.forms)}</span><small>${st('formLabels')}</small></div>`:''}<div class="popup-actions"><button type="button" class="speaker-btn" id="popupPronounce" aria-label="${escapeHtml(entry.de)}">♪</button>${entry.kind==='name'?'':`<button type="button" class="btn primary" id="saveStoryWord" ${saved?'disabled':''}>${st(saved?'saved':'save')}</button>`}</div>`;
 $('#wordPopup').setAttribute('aria-label',st('translation'));$('#wordPopup').hidden=false;positionWordPopup();$('#closeWordPopup').focus({preventScroll:true});
}
function cancelStorySpeech(){
 const wasSpeaking=storySpeaking;storySpeaking=false;storySpeechGeneration++;
 if(wasSpeaking&&'speechSynthesis' in window)window.speechSynthesis.cancel();
 if($('#listenStory'))$('#listenStory').textContent=st('listen');
}
function playStory(startAt=0){
 if(typeof startAt!=='number')startAt=0;
 if(storySpeaking){cancelStorySpeech();return;}
 if(!('speechSynthesis' in window)){showToast(t('speechUnsupported'));return;}
 window.speechSynthesis.cancel();storySpeaking=true;const generation=++storySpeechGeneration;$('#listenStory').textContent=st('stop');
 const sentences=stories[selectedStory].text.match(/[^.!?]+[.!?]?/g)||[];let index=startAt;
 function next(){
  if(generation!==storySpeechGeneration)return;
  if(index>=sentences.length){storySpeaking=false;$('#listenStory').textContent=st('listen');return;}
  storySentenceIndex=index;
  const utterance=configureSpeech(new SpeechSynthesisUtterance(sentences[index++].trim()));
  utterance.onend=next;utterance.onerror=event=>{if(generation===storySpeechGeneration){cancelStorySpeech();showAudioError(event);}};window.speechSynthesis.speak(utterance);
 }
 next();
}
function updateStoryUI(){
 if(!$('#storySelect'))return;
 document.querySelectorAll('[data-story-text]').forEach(el=>el.textContent=st(el.dataset.storyText));
 $('#storySelect').innerHTML=stories.map((s,i)=>`<option value="${i}">${s.level} · ${escapeHtml(s.title)}</option>`).join('');$('#storySelect').value=String(selectedStory);
 renderStory();
}
function initStories(){
 $('#storySelect').addEventListener('change',()=>{selectedStory=Number($('#storySelect').value);renderStory();});
 $('#storyText').addEventListener('click',e=>{const button=e.target.closest('[data-story-word]');if(button)openWordPopup(button);});
 $('#wordPopup').addEventListener('click',e=>{
  if(e.target.closest('#closeWordPopup')){closeWordPopup();return;}
  if(e.target.closest('#popupPronounce')){const token=storyTokens.filter(t=>t.word)[popupIndex];cancelStorySpeech();speak(token.entry.de);return;}
  if(e.target.closest('#saveStoryWord')){
   const token=storyTokens.filter(t=>t.word)[popupIndex],item=storyItem(token),key=itemKey(item);
   if(reviewData[key])return;
   reviewData[key]={due:Date.now(),interval:0,reviews:0};saveReviews();
   if(typeof item.id==='number'&&state(item.id)==='new'){progress[item.id]='learning';save();renderWords();}
   $('#saveStoryWord').textContent=st('saved');$('#saveStoryWord').disabled=true;renderReview();positionWordPopup();
  }
 });
 document.addEventListener('click',e=>{if(popupTarget&&!e.target.closest('#wordPopup')&&!e.target.closest('[data-story-word]'))closeWordPopup(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&popupTarget){e.preventDefault();closeWordPopup();}});
 window.addEventListener('resize',positionWordPopup);window.addEventListener('scroll',positionWordPopup,true);
 window.visualViewport?.addEventListener('resize',positionWordPopup);window.visualViewport?.addEventListener('scroll',positionWordPopup);
 $('#listenStory').addEventListener('click',playStory);
 // Other pronunciation controls cancel the story's speech chain before speaking.
 document.addEventListener('click',e=>{if(storySpeaking&&e.target.closest('[data-speak],#quizSpeak'))cancelStorySpeech();},true);
 $('#storyQuestions').addEventListener('click',e=>{
  const button=e.target.closest('[data-story-answer]');if(!button)return;
  const [question,answer]=button.dataset.storyAnswer.split(':').map(Number),id=stories[selectedStory].id;
  storyAnswers[id]||={};if(Object.hasOwn(storyAnswers[id],question))return;
  storyAnswers[id][question]=answer;renderStoryQuestions();
 });
 updateStoryUI();
}
