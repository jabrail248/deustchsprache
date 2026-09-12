/* Sprachoo level workspace. Existing deutsch250 storage identities are retained. */
const courseLevels=['A1','A2','B1','B2','C1'];
const courseTabs=['learn','stories','grammar','phrases','videos','listening'];
const courseText={
 en:{vocabulary:'Vocabulary',learn:'Words',stories:'Stories',grammar:'Grammar',phrases:'Chunks',videos:'Videos',listening:'Listening',assessment:'Test your German',practice:'Words in use',speed:'Reading speed',saved:'My Vocabulary',save:'Save word',remove:'Remove',note:'Your note',empty:'Save a word from a vocabulary card or a story to build your own practice list.',start:'Start test',restart:'Try again',next:'Next',check:'Check answer',correct:'Correct',answer:'Correct answer',explain:'Why?',assessmentIntro:'30 questions across A1–C1: grammar, word usage, irregular forms and reading. This gives a study-level estimate, not a certified CEFR result. Speaking and listening are not assessed.',practiceIntro:'Practise prepositions, word combinations, grammar and irregular forms.',result:'Your result',estimate:'Suggested study level',review:'Review your answers',watch:'Play video',listen:'Play audio',source:'Open source',transcript:'Read transcript',mediaHint:'Listening activities use the full YouTube player. External players need an internet connection. If playback is unavailable, open the source. Use the player controls for media speed.',mediaQuestions:'Practise this topic',notContent:'These original language questions practise the topic; they do not score recall of the external recording.',menu:'Toggle menu',home:'Home',saveStory:'Save to My Vocabulary',retake:'Start a new test',savedPractice:'Practise saved words',savedHint:'Choose the German word that fits the meaning.',study:'Keep practising this level',below:'Start with A1 foundations',resultNote:'Use this as a starting point. A short multiple-choice test cannot measure your full language ability.',noSaved:'Save at least four words to start a mixed practice session.',noStories:'Stories for this level are being prepared.',voice:'Voice settings',question:'Question',of:'of',understood:'I understood this lesson',done:'Lesson completed',resetLesson:'Review lesson',videoTask:'After watching, summarise the main idea aloud and give one example. Compare your answer with the source transcript where available.',audioTask:'Listen first without reading. Then answer the questions and open the transcript to check the details.'},
 az:{vocabulary:'Söz ehtiyatı',learn:'Sözlər',stories:'Hekayələr',grammar:'Qrammatika',phrases:'İfadələr',videos:'Videolar',listening:'Dinləmə',assessment:'Almancanı yoxla',practice:'Sözləri işlət',speed:'Oxuma sürəti',saved:'Söz dəftərim',save:'Sözü saxla',remove:'Sil',note:'Şəxsi qeydin',empty:'Şəxsi məşq siyahını yaratmaq üçün söz kartından və ya hekayədən söz saxla.',start:'Testə başla',restart:'Yenidən sına',next:'Növbəti',check:'Cavabı yoxla',correct:'Doğrudur',answer:'Düzgün cavab',explain:'Niyə?',assessmentIntro:'A1–C1 üzrə 30 sual: qrammatika, sözlərin işlənməsi, qaydasız formalar və oxuyub-anlama. Nəticə təhsil üçün təxmini istiqamətdir, rəsmi CEFR qiymətləndirməsi deyil. Danışıq və dinləmə bu testdə yoxlanmır.',practiceIntro:'Sözönüləri, söz birləşmələri, qrammatika və qaydasız formalar üzrə məşq et.',result:'Nəticən',estimate:'Tövsiyə olunan məşq səviyyəsi',review:'Cavablarına bax',watch:'Videonu aç',listen:'Səsi dinlə',source:'Mənbəni aç',transcript:'Mətni oxu',mediaHint:'Dinləmə məşqləri tam YouTube pleyerində açılır. Xarici pleyerlər üçün internet lazımdır. Səsləndirmə mümkün deyilsə, mənbəni aç. Media sürətini pleyerdə dəyiş.',mediaQuestions:'Bu mövzu üzrə məşq',notContent:'Bu orijinal dil sualları mövzu üzrə məşq üçündür; xarici yazının məzmununu yadda saxlamağı yoxlamır.',menu:'Menyunu aç və ya yığ',home:'Ana səhifə',saveStory:'Söz dəftərimə əlavə et',retake:'Yeni testə başla',savedPractice:'Saxlanmış sözlərlə məşq et',savedHint:'Mənaya uyğun almanca sözü seç.',study:'Bu səviyyə üzrə məşqə davam et',below:'A1 əsaslarından başla',resultNote:'Bunu başlanğıc istiqamət kimi qəbul et. Qısa seçimli test bütün dil bacarıqlarını ölçə bilməz.',noSaved:'Qarışıq məşqə başlamaq üçün ən azı dörd söz saxla.',noStories:'Bu səviyyə üçün hekayələr hazırlanır.',voice:'Səs seçimi',question:'Sual',of:'/',understood:'Bu mövzunu başa düşdüm',done:'Mövzu tamamlandı',resetLesson:'Mövzunu təkrar et',videoTask:'Baxdıqdan sonra əsas fikri ucadan yekunlaşdır və bir nümunə ver. Mənbədə mətn varsa, cavabını onunla müqayisə et.',audioTask:'Əvvəlcə mətni oxumadan dinlə. Sonra sualları cavablandır və detalları yoxlamaq üçün mətni aç.'}
};
function ct(k){return courseText[translationLanguage][k]||k;}
function readCourseStore(key,fallback){try{return JSON.parse(safeGet(key,JSON.stringify(fallback)))}catch{return fallback}}
let savedWords=readCourseStore('sprachoo-saved-words',[]);if(!Array.isArray(savedWords))savedWords=[];
savedWords=savedWords.filter(w=>w&&typeof w.de==='string'&&typeof w.en==='string'&&typeof w.az==='string');
let lessonDone=readCourseStore('sprachoo-grammar',{});if(!lessonDone||typeof lessonDone!=='object'||Array.isArray(lessonDone))lessonDone={};
let courseLevel=courseLevels.includes(safeGet('sprachoo-level','A1'))?safeGet('sprachoo-level','A1'):'A1';
let courseView='home',testState=null,practiceState=null,mediaAnswers={};
function shuffled(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
function courseRoute(){
 const parts=window.location.hash.slice(1).split('/');
 if(parts[0]==='level'&&courseLevels.includes(parts[1]))return {view:courseTabs.includes(parts[2])||parts[2]==='practice'?parts[2]:'learn',level:parts[1]};
 if(parts[0]==='progress')return {view:'saved',level:courseLevel};
 return {view:['home','saved','assessment','review','quiz',...courseTabs,'practice'].includes(parts[0])?parts[0]:'home',level:courseLevel};
}
function savePersonalWord(word){
 if(!savedWords.some(w=>w.de===word.de)){savedWords.push({de:word.de,en:word.en,az:word.az,level:word.level||courseLevel,plural:word.plural||'',forms:word.forms||'',note:''});safeSet('sprachoo-saved-words',JSON.stringify(savedWords));}
 renderSaved();decorateWordCards();showToast(ct('saveStory'));
}
function decorateWordCards(){document.querySelectorAll('#wordGrid .word-card').forEach(card=>{
 const button=card.querySelector('[data-id]'),word=words.find(w=>String(w.id)===button?.dataset.id);if(!word)return;
 let saveButton=card.querySelector('[data-personal-word]');if(!saveButton){saveButton=document.createElement('button');saveButton.type='button';saveButton.className='btn secondary personal-save';saveButton.dataset.personalWord=word.id;card.appendChild(saveButton)}
 const exists=savedWords.some(w=>w.de===word.de);saveButton.textContent=exists?'✓ '+ct('saved'):'+ '+ct('save');saveButton.disabled=exists;
});}
function renderSaved(){
 $('#savedWordsList').innerHTML=savedWords.length?savedWords.map((w,i)=>`<article class="word-card"><span class="tag">${escapeHtml(w.level)}</span><h3 lang="de">${escapeHtml(w.de)}</h3><p>${escapeHtml(meaning(w))}</p>${w.plural?`<p>${st('plural')}: ${escapeHtml(w.plural)}</p>`:''}${w.forms?`<p>${escapeHtml(w.forms)}</p>`:''}<button type="button" class="speaker-btn" data-speak="${escapeHtml(w.de)}">♪</button><label class="personal-note">${ct('note')}<textarea data-word-note="${i}" maxlength="800">${escapeHtml(w.note||'')}</textarea></label><button type="button" class="btn secondary" data-remove-personal="${i}">${ct('remove')}</button></article>`).join(''):`<p class="empty-state">${ct('empty')}</p>`;
 $('#savedPractice').textContent=ct('savedPractice');$('#savedPractice').disabled=savedWords.length<4;$('#savedPracticeHint').textContent=savedWords.length<4?ct('noSaved'):ct('savedHint');
}
function renderGrammar(){
 $('#grammarLessons').innerHTML=grammarLessons.filter(g=>g.level===courseLevel).map((g,i)=>{
 const key=courseLevel+'-'+i,done=lessonDone[key];
 return `<details class="grammar-lesson" ${i===0?'open':''}><summary>${escapeHtml(g.title[translationLanguage])}${done?' ✓':''}</summary><p>${escapeHtml(g.rule[translationLanguage])}</p>${g.examples.map(e=>`<div class="lesson-example"><p lang="de">${escapeHtml(e.de)} <button type="button" class="speaker-btn" data-speak="${escapeHtml(e.de)}">♪</button></p><p>${escapeHtml(e[translationLanguage])}</p></div>`).join('')}<button class="btn secondary" type="button" data-lesson-done="${key}" aria-pressed="${!!done}">${ct(done?'done':'understood')}</button></details>`;
 }).join('')+`<a class="btn primary" href="#level/${courseLevel}/practice">${ct('practice')} →</a>`;
}
function filterStoriesToLevel(){
 const list=stories.map((s,i)=>({s,i})).filter(({s})=>s.level===courseLevel);
 if(!list.length){$('#storySelect').innerHTML='';$('#storyTitle').textContent=ct('noStories');$('#storyText').innerHTML='';$('#storyQuestions').innerHTML='';$('#storyScore').textContent='';$('#listenStory').disabled=true;return;}
 $('#listenStory').disabled=false;
 if(stories[selectedStory]?.level!==courseLevel)selectedStory=list[0].i;
 $('#storySelect').innerHTML=list.map(({s,i})=>`<option value="${i}">${escapeHtml(s.title)}</option>`).join('');$('#storySelect').value=String(selectedStory);renderStory();
}
function renderCourseChrome(){
 document.querySelectorAll('[data-course-text]').forEach(el=>el.textContent=ct(el.dataset.courseText));
 $('#sidebarLevels').innerHTML=courseLevels.map(l=>`<a href="#level/${l}/learn" class="${l===courseLevel&&courseTabs.includes(courseView)?'nav-active':''}" ${l===courseLevel&&courseTabs.includes(courseView)?'aria-current="page"':''}>${l}<small>${levelCounts[l]} ${translationLanguage==='az'?'söz':'words'}</small></a>`).join('');
 const inLevel=courseTabs.includes(courseView)||courseView==='practice';$('#levelWorkspace').hidden=!inLevel;
 $('#courseLevelTitle').textContent=courseLevel;$('#learnTitle').textContent=translationLanguage==='az'?'Sözləri kontekstdə öyrən':'Words in context';
 $('#levelTabs').innerHTML=courseTabs.map(tab=>`<a href="#level/${courseLevel}/${tab}" ${courseView===tab?'aria-current="page"':''}>${ct(tab)}</a>`).join('')+`<a href="#level/${courseLevel}/practice" ${courseView==='practice'?'aria-current="page"':''}>${ct('practice')}</a>`;
 $('#levelSpeed').innerHTML=[['0.75','slow'],['1','normal'],['1.25','fast']].map(([v,key])=>`<option value="${v}">${at(key)}</option>`).join('');$('#levelSpeed').value=String(speechRate);
 $('#sidebarToggle').setAttribute('aria-label',ct('menu'));
 $('#workspaceBreadcrumb').textContent='Sprachoo / '+(inLevel?courseLevel+' / ':'')+ct(courseView);
 $('#homeSavedLink').textContent=ct('saved')+' →';
}
function stopCourseMedia(){document.querySelectorAll('audio').forEach(a=>a.pause());document.querySelectorAll('.media-frame iframe').forEach(f=>f.remove());document.querySelectorAll('[data-play-media]').forEach(b=>b.hidden=false);}
function showCourse(){
 const route=courseRoute(),changed=route.view!==courseView||route.level!==courseLevel;
 if(changed){closeWordPopup(false);cancelStorySpeech();if('speechSynthesis' in window)window.speechSynthesis.cancel();stopCourseMedia();}
 const levelChanged=courseLevel!==route.level;courseView=route.view;courseLevel=route.level;currentWorkspace=courseView;safeSet('sprachoo-level',courseLevel);
 document.querySelectorAll('main > section').forEach(s=>s.hidden=s.id!==courseView);
 document.querySelectorAll('.topbar nav > a').forEach(a=>{const on=a.getAttribute('href')==='#'+courseView;a.classList.toggle('nav-active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 if(levelChanged||activeLevel!==courseLevel){activeLevel=courseLevel;wordPage=0;$('#searchInput').value='';$('#statusFilter').value='all';initLevels();}
 $('#phraseLevel').value=courseLevel;$('#quizLevel').value=courseLevel;
 if(courseView==='learn'){$('#vocabularyContent').hidden=false;updateVocabularyToggle();renderWords();decorateWordCards();}
 if(courseView==='stories')filterStoriesToLevel();
 if(courseView==='phrases')renderPhrases();
 if(courseView==='grammar')renderGrammar();
 if(courseView==='saved')renderSaved();
 if(courseView==='quiz'&&levelChanged)newQuiz(true);
 if(courseView==='videos'||courseView==='listening')renderMedia();
 if(courseView==='assessment')renderTest('assessment');
 if(courseView==='practice'){if(practiceState?.level!==courseLevel)practiceState=null;renderTest('practice');}
 renderCourseChrome();
 if(changed){$('#'+courseView).setAttribute('tabindex','-1');$('#'+courseView).focus({preventScroll:true});window.scrollTo({top:0,behavior:'auto'});}
}
function makeTest(mode){
 let list=[];
 if(mode==='assessment')courseLevels.forEach(l=>{
  const pool=usageQuestions.filter(q=>q.level===l);
  list.push(...shuffled(pool.filter(q=>q.kind==='grammar')).slice(0,2),...shuffled(pool.filter(q=>q.kind==='usage')).slice(0,1),...shuffled(pool.filter(q=>q.kind==='form')).slice(0,1),...shuffled(pool.filter(q=>q.kind==='reading')).slice(0,2));
 });
 else list=shuffled(usageQuestions.filter(q=>q.level===courseLevel));
 return {level:courseLevel,list:list.map(q=>{const order=shuffled(q.options.map((_,i)=>i));return {...q,options:order.map(i=>q.options[i]),correct:order.indexOf(q.correct)}}),answers:[],index:0,finished:false};
}
function currentTest(mode){return mode==='assessment'?testState:practiceState}
function estimateStudyLevel(results){let suggested='A1';for(const level of courseLevels){const r=results.find(x=>x.level===level);if(!r||r.correct/r.total<.67)return level;suggested=level;}return suggested;}
function renderTest(mode){
 const target=$('#'+(mode==='assessment'?'assessmentPanel':'practicePanel')),state=currentTest(mode);
 if(!state){target.innerHTML=`<p>${ct(mode==='practice'?'practiceIntro':'resultNote')}</p><button class="btn primary" type="button" data-start-test="${mode}">${ct('start')}</button>`;return;}
 if(state.finished){
 const correct=state.list.filter((q,i)=>state.answers[i]===q.correct).length;
 const breakdown=courseLevels.map(level=>{const entries=state.list.map((q,i)=>({q,i})).filter(x=>x.q.level===level);return {level,total:entries.length,correct:entries.filter(x=>state.answers[x.i]===x.q.correct).length}}).filter(x=>x.total);
 target.innerHTML=`<div class="test-result"><h3>${ct('result')}: ${correct} / ${state.list.length}</h3>${mode==='assessment'?`<p>${ct('estimate')}: <strong>${estimateStudyLevel(breakdown)}</strong></p><p>${ct('resultNote')}</p>`:''}<div class="result-levels">${breakdown.map(r=>`<span>${r.level}: ${r.correct}/${r.total}</span>`).join('')}</div><button type="button" class="btn primary" data-start-test="${mode}">${ct('retake')}</button></div><h3>${ct('review')}</h3>${state.list.map((q,i)=>`<details class="grammar-lesson"><summary>${state.answers[i]===q.correct?'✓':'✕'} ${escapeHtml(q.q)}</summary><p>${ct('answer')}: <strong>${escapeHtml(q.options[q.correct])}</strong></p><p>${escapeHtml(q.explanation[translationLanguage])}</p></details>`).join('')}`;return;
 }
 const q=state.list[state.index],answered=state.answers[state.index]!==undefined;
 target.innerHTML=`<article class="test-card"><p>${ct('question')} ${state.index+1} / ${state.list.length} · ${q.level}</p><progress value="${state.index}" max="${state.list.length}" aria-label="${ct('question')}"></progress><h3 lang="de">${escapeHtml(q.q)}</h3><div class="test-options">${q.options.map((a,i)=>`<button type="button" data-test-answer="${mode}:${i}" ${answered?'disabled':''} class="${answered&&i===q.correct?'answer-correct':answered&&i===state.answers[state.index]?'answer-wrong':''}" lang="de">${escapeHtml(a)}</button>`).join('')}</div>${answered?`<div role="status"><strong>${ct(state.answers[state.index]===q.correct?'correct':'answer')}${state.answers[state.index]===q.correct?'':': '+escapeHtml(q.options[q.correct])}</strong><p>${escapeHtml(q.explanation[translationLanguage])}</p></div><button type="button" class="btn primary" data-test-next="${mode}">${ct('next')} →</button>`:''}</article>`;
}
function renderMedia(){
 const kind=courseView==='videos'?'video':'audio',list=mediaActivities.filter(m=>m.level===courseLevel&&m.kind===kind);
 const target=$('#'+(kind==='video'?'videoActivities':'listeningActivities'));
 target.innerHTML=`<p class="media-notice">${ct('mediaHint')}</p>`+list.map(m=>`<article class="media-card"><span class="tag">${m.level} · ${escapeHtml(m.provider)}</span><h3>${escapeHtml(m.title)}</h3><div class="media-frame" id="frame-${m.id}"><button type="button" class="btn primary" data-play-media="${m.id}">${ct(kind==='video'?'watch':'listen')} ▶</button></div><a href="${escapeHtml(m.url)}" target="_blank" rel="noopener noreferrer">${ct('source')} ↗</a><p>${ct(m.youtube?'videoTask':'audioTask')}</p>${m.transcript?`<details class="media-transcript"><summary>${ct('transcript')}</summary><p lang="de">${escapeHtml(m.transcript)}</p></details>`:''}<h4>${ct('mediaQuestions')}</h4>${m.topicOnly?`<p>${ct('notContent')}</p>`:''}<div>${m.questions.map((q,i)=>{const a=mediaAnswers[m.id+':'+i];return `<fieldset class="story-question"><legend lang="de">${escapeHtml(q.q)}</legend><div class="test-options">${q.options.map((o,j)=>`<button type="button" data-media-answer="${m.id}:${i}:${j}" ${a!==undefined?'disabled':''} class="${a!==undefined&&j===q.correct?'answer-correct':a===j?'answer-wrong':''}">${escapeHtml(o)}</button>`).join('')}</div>${a!==undefined?`<p>${escapeHtml(q.explanation[translationLanguage])}</p>`:''}</fieldset>`}).join('')}</div></article>`).join('');
}
function initCourse(){
 uiText.en.learnTitle='Words in context';uiText.az.learnTitle='Sözləri kontekstdə öyrən';

 const collapsed=safeGet('sprachoo-sidebar',window.matchMedia('(max-width:760px)').matches?'closed':'open')==='closed';document.body.classList.toggle('sidebar-collapsed',collapsed);$('#sidebarToggle').setAttribute('aria-expanded',String(!collapsed));
 $('#sidebarToggle').addEventListener('click',()=>{const closed=document.body.classList.toggle('sidebar-collapsed');$('#sidebarToggle').setAttribute('aria-expanded',String(!closed));safeSet('sprachoo-sidebar',closed?'closed':'open');});
 $('#levelSpeed').addEventListener('change',()=>{const rate=Number($('#levelSpeed').value);if([.75,1,1.25].includes(rate)){speechRate=rate;applyAudioChange();renderCourseChrome();document.querySelectorAll('audio').forEach(a=>a.playbackRate=rate);}});
 $('#savedWordsList').addEventListener('input',e=>{if(e.target.dataset.wordNote!==undefined){const w=savedWords[Number(e.target.dataset.wordNote)];if(w){w.note=e.target.value.slice(0,800);safeSet('sprachoo-saved-words',JSON.stringify(savedWords));}}});
 $('#savedPractice').addEventListener('click',()=>{
 if(savedWords.length<4)return;
 const list=shuffled(savedWords).slice(0,10).map((w,i)=>{const options=shuffled([w,...shuffled(savedWords.filter(x=>x.de!==w.de)).slice(0,3)]);return {id:'personal-'+i,level:w.level,q:meaning(w),options:options.map(x=>x.de),correct:options.findIndex(x=>x.de===w.de),explanation:{en:w.de+' — '+w.en,az:w.de+' — '+w.az}}});
 practiceState={level:courseLevel,list,answers:[],index:0,finished:false};navigateWorkspace('practice');
 });
 document.addEventListener('click',e=>{
 const save=e.target.closest('[data-personal-word]');if(save){const w=words.find(w=>String(w.id)===save.dataset.personalWord);if(w)savePersonalWord(w);}
 const remove=e.target.closest('[data-remove-personal]');if(remove){savedWords.splice(Number(remove.dataset.removePersonal),1);safeSet('sprachoo-saved-words',JSON.stringify(savedWords));renderSaved();}
 if(e.target.closest('#savePersonalStory')){const token=storyTokens.filter(t=>t.word)[popupIndex];if(token?.entry)savePersonalWord({...token.entry,level:stories[selectedStory].level});}
 const done=e.target.closest('[data-lesson-done]');if(done){lessonDone[done.dataset.lessonDone]=!lessonDone[done.dataset.lessonDone];safeSet('sprachoo-grammar',JSON.stringify(lessonDone));done.textContent=ct(lessonDone[done.dataset.lessonDone]?'done':'understood');done.setAttribute('aria-pressed',String(!!lessonDone[done.dataset.lessonDone]));}
 const start=e.target.closest('[data-start-test]');if(start){const mode=start.dataset.startTest;if(mode==='assessment')testState=makeTest(mode);else practiceState=makeTest(mode);renderTest(mode);}
 const answer=e.target.closest('[data-test-answer]');if(answer){const [mode,i]=answer.dataset.testAnswer.split(':'),s=currentTest(mode);if(s&&!s.finished&&s.answers[s.index]===undefined){s.answers[s.index]=Number(i);renderTest(mode);}}
 const next=e.target.closest('[data-test-next]');if(next){const mode=next.dataset.testNext,s=currentTest(mode);if(s&&s.answers[s.index]!==undefined){s.index++;if(s.index>=s.list.length)s.finished=true;renderTest(mode);}}
 const media=e.target.closest('[data-play-media]');if(media){const m=mediaActivities.find(x=>x.id===media.dataset.playMedia);if(m){stopCourseMedia();const frame=$('#frame-'+m.id);if(m.youtube){const iframe=document.createElement('iframe');iframe.src='https://www.youtube-nocookie.com/embed/'+m.youtube+'?rel=0';iframe.title=m.title;iframe.allow='encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';frame.appendChild(iframe);}else if(m.audio){let player=frame.querySelector('audio');if(!player){player=document.createElement('audio');player.controls=true;player.preload='none';player.src=m.audio;player.addEventListener('error',()=>{media.hidden=false;});frame.appendChild(player);}player.playbackRate=speechRate;player.play().catch(()=>{media.hidden=false;});}media.hidden=true;}}
 const ma=e.target.closest('[data-media-answer]');if(ma){const [id,i,j]=ma.dataset.mediaAnswer.split(':');const key=id+':'+i;if(mediaAnswers[key]===undefined){mediaAnswers[key]=Number(j);const field=ma.closest('fieldset'),q=mediaActivities.find(x=>x.id===id).questions[Number(i)];field.querySelectorAll('button').forEach((b,k)=>{b.disabled=true;b.classList.toggle('answer-correct',k===q.correct);b.classList.toggle('answer-wrong',k===Number(j)&&k!==q.correct)});const p=document.createElement('p');p.textContent=q.explanation[translationLanguage];field.appendChild(p);}}
 });
 window.addEventListener('hashchange',showCourse);
 showCourse();
}
// Replace the old single-screen router while retaining old hash links.
navigateWorkspace=function(route){window.location.hash=courseTabs.includes(route)||route==='practice'?'level/'+courseLevel+'/'+route:route;showCourse();};
showWorkspace=function(){if(typeof courseLevel!=='undefined')showCourse();};
const originalRenderWords=renderWords;renderWords=function(){originalRenderWords();decorateWordCards();};
const originalLanguageUpdate=updateLanguageUI;updateLanguageUI=function(){originalLanguageUpdate();showCourse();};
initCourse();
