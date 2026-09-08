const featureText = {
 en:{navReview:'Review',navPhrases:'Phrases',examples:'2 examples',reviewTitle:'Review today.',reviewCopy:'Recall the meaning before revealing it. Difficult cards return sooner; familiar cards wait longer.',level:'Level',allLevels:'All levels',startReview:'Start review',reveal:'Show answer',again:'Again',hard:'Hard',good:'Good',easy:'Easy',due:'due now',newCards:'new cards',reviewHint:'Each session includes due cards and up to 10 new cards. Progress stays in this browser.',empty:'Nothing to review right now.',finished:'Session complete.',nextDue:'Next review',session:'Card',of:'of',phrasesTitle:'Say more with useful phrases.',phrasesCopy:'30 expressions from everyday conversations to formal discussions. Levels are approximate learning guides.',addReview:'Add to review',inReview:'In review',phrase:'Phrase',word:'Word',phraseCount:'phrases',reviewAgain:'Start another session',savedNotice:'Your review progress is saved in this browser.',storageNotice:'This browser cannot save progress. Reviews will work for this visit only.',resetConfirm:'Reset all word progress and review schedules, including phrases?',minutes:'min',days:'days',tomorrow:'1 day',practice:'Review today',recall:'What does this mean?',reviewed:'reviewed this session',chooseLevel:'Choose a level or return later.',scheduled:'Scheduled',viewWords:'Explore words'},
 az:{navReview:'Təkrar',navPhrases:'İfadələr',examples:'2 nümunə',reviewTitle:'Bu gün təkrar et.',reviewCopy:'Cavabı açmazdan əvvəl mənanı xatırla. Çətin kartlar daha tez, yaxşı bildiklərin isə daha gec qayıdır.',level:'Səviyyə',allLevels:'Bütün səviyyələr',startReview:'Təkrara başla',reveal:'Cavabı göstər',again:'Yenidən',hard:'Çətin',good:'Yaxşı',easy:'Asan',due:'indi təkrar edilməli',newCards:'yeni kart',reviewHint:'Hər məşqə vaxtı çatmış kartlar və ən çox 10 yeni kart daxildir. Proqres bu brauzerdə saxlanılır.',empty:'Hazırda təkrar ediləcək kart yoxdur.',finished:'Məşq tamamlandı.',nextDue:'Növbəti təkrar',session:'Kart',of:'/',phrasesTitle:'İfadələrlə daha çox fikir bildir.',phrasesCopy:'Gündəlik söhbətlərdən rəsmi müzakirələrə qədər 30 ifadə. Səviyyələr təxmini öyrənmə göstəriciləridir.',addReview:'Təkrara əlavə et',inReview:'Təkrar siyahısında',phrase:'İfadə',word:'Söz',phraseCount:'ifadə',reviewAgain:'Yeni məşqə başla',savedNotice:'Təkrar proqresin bu brauzerdə saxlanılır.',storageNotice:'Bu brauzer proqresi saxlaya bilmir. Təkrar yalnız bu ziyarət ərzində işləyəcək.',resetConfirm:'İfadələr daxil olmaqla bütün söz proqresini və təkrar cədvəllərini sıfırlamaq istəyirsən?',minutes:'dəq',days:'gün',tomorrow:'1 gün',practice:'Bu gün təkrar et',recall:'Bu nə deməkdir?',reviewed:'kart bu məşqdə təkrar edildi',chooseLevel:'Səviyyə seç və ya daha sonra qayıt.',scheduled:'Planlaşdırılıb',viewWords:'Sözlərə bax'}
};
let reviewData = {}, reviewSession = [], reviewIndex = 0, reviewRevealed = false, reviewStarted = false, reviewStorageOK = true;
function ft(key){return featureText[translationLanguage][key];}
function itemKey(item){return typeof item.id === 'number' ? 'word-'+item.id : item.id;}
function allStudyItems(){return [...words,...phrases];}
function examplesFor(item){return item.examples || wordExamples[item.id] || [];}
function examplesHTML(item,collapsible=true){
 const examples=examplesFor(item);
 const rows=examples.map(example=>`<div class="context-example"><div class="example-german"><p lang="de">${escapeHtml(example.de)}</p><button type="button" class="speaker-btn" data-speak="${escapeHtml(example.de)}" aria-label="${escapeHtml(example.de)}">♪</button></div><p class="example-translation" lang="${translationLanguage}">${escapeHtml(meaning(example))}</p></div>`).join('');
 return collapsible ? `<details class="word-examples"><summary>${ft('examples')}</summary>${rows}</details>` : `<div class="review-examples">${rows}</div>`;
}
function saveReviews(){
 try{localStorage.setItem('deutsch250-reviews-v1',JSON.stringify(reviewData));reviewStorageOK=true;}catch(e){reviewStorageOK=false;}
}
function syncWordReview(id){
 const key='word-'+id;
 if(state(id)==='new') delete reviewData[key];
 else if(!reviewData[key]) reviewData[key]={due:Date.now(),interval:0,reviews:0};
 saveReviews();renderReview();
}
function reviewPool(){const level=$('#reviewLevel').value;return allStudyItems().filter(item=>level==='all'||item.level===level);}
function reviewSummary(){
 const now=Date.now(),pool=reviewPool();
 const due=pool.filter(item=>reviewData[itemKey(item)]?.due<=now).sort((a,b)=>reviewData[itemKey(a)].due-reviewData[itemKey(b)].due);
 const fresh=pool.filter(item=>!reviewData[itemKey(item)]);
 const future=pool.map(item=>reviewData[itemKey(item)]?.due).filter(due=>due>now);
 return {due,fresh,next:future.length?Math.min(...future):null};
}
function dateLabel(ms){return new Intl.DateTimeFormat(translationLanguage==='az'?'az-AZ':'en-GB',{dateStyle:'medium',timeStyle:'short'}).format(ms);}
function intervalLabel(days){return days<1?`${Math.round(days*1440)} ${ft('minutes')}`:`${days} ${ft('days')}`;}
function renderReview(){
 if(!$('#reviewStats'))return;
 const summary=reviewSummary();
 $('#reviewStats').textContent=`${summary.due.length} ${ft('due')} · ${summary.fresh.length} ${ft('newCards')}`;
 $('#reviewStorage').textContent=ft(reviewStorageOK?'savedNotice':'storageNotice');
 const item=reviewSession[reviewIndex];
 if(!item){
 const heading=reviewStarted?ft('finished'):ft('reviewTitle');
 $('#reviewCard').innerHTML=`<h3>${heading}</h3>${reviewStarted?`<p>${reviewIndex} ${ft('reviewed')}</p>`:''}<p>${summary.due.length||summary.fresh.length?ft('reviewHint'):ft('empty')}</p>${summary.next?`<p>${ft('nextDue')}: ${dateLabel(summary.next)}</p>`:''}<button type="button" id="startReview" class="btn primary" ${summary.due.length||summary.fresh.length?'':'disabled'}>${ft(reviewStarted?'reviewAgain':'startReview')}</button>`;
 return;
 }
 const kind=typeof item.id==='number'?'word':'phrase';
 $('#reviewCard').innerHTML=`<div class="review-card-top"><span>${ft('session')} ${reviewIndex+1} ${ft('of')} ${reviewSession.length}</span><span class="tag">${item.level} · ${ft(kind)}</span></div><p class="small-label">${ft('recall')}</p><h3 lang="de">${escapeHtml(item.de)}</h3><button type="button" class="speaker-btn" data-speak="${escapeHtml(item.de)}" aria-label="${escapeHtml(item.de)}">♪</button>${reviewRevealed?`<p class="review-meaning">${escapeHtml(meaning(item))}</p>${examplesHTML(item,false)}<div class="review-ratings">${['again','hard','good','easy'].map(rating=>`<button type="button" data-rating="${rating}"><strong>${ft(rating)}</strong><span>${intervalLabel(ReviewScheduler.next(reviewData[itemKey(item)],rating).interval)}</span></button>`).join('')}</div>`:`<button type="button" id="revealReview" class="btn primary reveal-answer">${ft('reveal')}</button>`}`;
}
function startReview(){
 const summary=reviewSummary();reviewSession=[...summary.due,...summary.fresh.slice(0,10)];reviewIndex=0;reviewRevealed=false;reviewStarted=true;renderReview();focusReview();
}
function focusReview(){const target=$('#revealReview')||$('#startReview');if(target)target.focus({preventScroll:true});}
function rateReview(rating){
 const item=reviewSession[reviewIndex];if(!item||!reviewRevealed)return;
 reviewData[itemKey(item)]=ReviewScheduler.next(reviewData[itemKey(item)],rating);
 if(typeof item.id==='number'){
  progress[item.id]=rating==='again'?'learning':reviewData[itemKey(item)].interval>=7?'mastered':'learning';
  save();renderWords();
 }
 saveReviews();reviewIndex++;reviewRevealed=false;renderReview();renderPhrases();focusReview();
}
function renderPhrases(){
 const level=$('#phraseLevel').value;
 const list=phrases.filter(item=>level==='all'||item.level===level);
 $('#phraseCount').textContent=`${list.length} ${ft('phraseCount')}`;
 $('#phraseGrid').innerHTML=list.map(item=>`<article class="word-card phrase-card" data-level="${item.level}"><div class="word-top"><span class="tag">${item.level} · ${ft('phrase')}</span><button type="button" class="speaker-btn" data-speak="${escapeHtml(item.de)}" aria-label="${escapeHtml(item.de)}">♪</button></div><h3 lang="de">${escapeHtml(item.de)}</h3><p class="meaning">${escapeHtml(meaning(item))}</p>${examplesHTML(item,false)}<button type="button" class="btn secondary" data-enroll="${item.id}" ${reviewData[item.id]?'disabled':''}>${ft(reviewData[item.id]?'inReview':'addReview')}</button></article>`).join('');
}
function updateFeatureUI(){
 document.querySelectorAll('[data-feature-text]').forEach(el=>el.textContent=ft(el.dataset.featureText));
 for(const id of ['reviewLevel','phraseLevel']){
  const select=$('#'+id),value=select.value||'A1';
  select.innerHTML=`<option value="all">${ft('allLevels')}</option>`+Object.keys(levelCounts).map(level=>`<option value="${level}">${level}</option>`).join('');select.value=value;
 }
 renderReview();renderPhrases();
}
function resetReviews(){reviewData={};reviewSession=[];reviewIndex=0;reviewStarted=false;reviewRevealed=false;saveReviews();renderReview();renderPhrases();}
function initFeatures(){
 try{
  const loaded=JSON.parse(safeGet('deutsch250-reviews-v1','{}'));
  if(loaded && typeof loaded==='object' && !Array.isArray(loaded)){
   for(const item of allStudyItems()){const key=itemKey(item);if(ReviewScheduler.valid(loaded[key]))reviewData[key]=loaded[key];}
  }
 }catch(e){reviewData={};}
 for(const item of words)if(state(item.id)!=='new'&&!reviewData[itemKey(item)])reviewData[itemKey(item)]={due:Date.now(),interval:0,reviews:0};
 saveReviews();
 $('#reviewCard').addEventListener('click',e=>{
  if(e.target.closest('#startReview'))startReview();
  else if(e.target.closest('#revealReview')){reviewRevealed=true;renderReview();$('#reviewCard [data-rating]')?.focus({preventScroll:true});}
  else {const button=e.target.closest('[data-rating]');if(button)rateReview(button.dataset.rating);}
 });
 $('#reviewLevel').addEventListener('change',()=>{reviewSession=[];reviewIndex=0;reviewStarted=false;reviewRevealed=false;renderReview();});
 $('#phraseLevel').addEventListener('change',renderPhrases);
 $('#phraseGrid').addEventListener('click',e=>{
  const button=e.target.closest('[data-enroll]');if(!button||reviewData[button.dataset.enroll])return;
  reviewData[button.dataset.enroll]={due:Date.now(),interval:0,reviews:0};saveReviews();renderPhrases();renderReview();
 });
 // Refresh due counts after returning to the page or while it stays open.
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)renderReview();});
 setInterval(()=>{if(!document.hidden&&!reviewSession[reviewIndex])renderReview();},30000);
 updateFeatureUI();
}
