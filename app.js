const words = [
// A1 50
['A1','sein','to be','verb'],['A1','haben','to have','verb'],['A1','werden','to become / will','verb'],['A1','können','can / be able to','verb'],['A1','müssen','must / have to','verb'],['A1','machen','to do / make','verb'],['A1','sagen','to say','verb'],['A1','gehen','to go','verb'],['A1','kommen','to come','verb'],['A1','sehen','to see','verb'],['A1','geben','to give','verb'],['A1','wissen','to know','verb'],['A1','finden','to find','verb'],['A1','bleiben','to stay','verb'],['A1','nehmen','to take','verb'],['A1','sprechen','to speak','verb'],['A1','lernen','to learn','verb'],['A1','arbeiten','to work','verb'],['A1','wohnen','to live / reside','verb'],['A1','brauchen','to need','verb'],['A1','ich','I','pronoun'],['A1','du','you','pronoun'],['A1','er','he','pronoun'],['A1','sie','she / they','pronoun'],['A1','wir','we','pronoun'],['A1','das','the / that','article'],['A1','der','the','article'],['A1','die','the','article'],['A1','ein','a / one','article'],['A1','kein','no / not a','article'],['A1','und','and','connector'],['A1','oder','or','connector'],['A1','aber','but','connector'],['A1','auch','also','adverb'],['A1','nicht','not','adverb'],['A1','hier','here','adverb'],['A1','da','there','adverb'],['A1','heute','today','adverb'],['A1','jetzt','now','adverb'],['A1','immer','always','adverb'],['A1','gut','good','adjective'],['A1','groß','big / tall','adjective'],['A1','klein','small','adjective'],['A1','neu','new','adjective'],['A1','alt','old','adjective'],['A1','der Mann','man','noun'],['A1','die Frau','woman','noun'],['A1','das Kind','child','noun'],['A1','die Zeit','time','noun'],['A1','der Tag','day','noun'],
// A2 50
['A2','fragen','to ask','verb'],['A2','antworten','to answer','verb'],['A2','erzählen','to tell','verb'],['A2','erklären','to explain','verb'],['A2','helfen','to help','verb'],['A2','zeigen','to show','verb'],['A2','bringen','to bring','verb'],['A2','kaufen','to buy','verb'],['A2','bezahlen','to pay','verb'],['A2','warten','to wait','verb'],['A2','beginnen','to begin','verb'],['A2','enden','to end','verb'],['A2','fahren','to drive / travel','verb'],['A2','laufen','to run / walk','verb'],['A2','essen','to eat','verb'],['A2','trinken','to drink','verb'],['A2','schlafen','to sleep','verb'],['A2','treffen','to meet','verb'],['A2','besuchen','to visit','verb'],['A2','vergessen','to forget','verb'],['A2','schon','already','adverb'],['A2','noch','still / yet','adverb'],['A2','wieder','again','adverb'],['A2','oft','often','adverb'],['A2','manchmal','sometimes','adverb'],['A2','vielleicht','perhaps','adverb'],['A2','deshalb','therefore','connector'],['A2','dann','then','adverb'],['A2','zuerst','first','adverb'],['A2','später','later','adverb'],['A2','wichtig','important','adjective'],['A2','richtig','correct','adjective'],['A2','falsch','wrong','adjective'],['A2','einfach','easy / simple','adjective'],['A2','schwierig','difficult','adjective'],['A2','schnell','fast','adjective'],['A2','langsam','slow','adjective'],['A2','teuer','expensive','adjective'],['A2','billig','cheap','adjective'],['A2','frei','free','adjective'],['A2','die Arbeit','work / job','noun'],['A2','das Geld','money','noun'],['A2','die Familie','family','noun'],['A2','die Wohnung','apartment','noun'],['A2','die Schule','school','noun'],['A2','die Stadt','city','noun'],['A2','das Problem','problem','noun'],['A2','die Frage','question','noun'],['A2','die Antwort','answer','noun'],['A2','das Jahr','year','noun'],
// B1 75
['B1','denken','to think','verb'],['B1','glauben','to believe','verb'],['B1','meinen','to think / mean','verb'],['B1','verstehen','to understand','verb'],['B1','entscheiden','to decide','verb'],['B1','versuchen','to try','verb'],['B1','planen','to plan','verb'],['B1','hoffen','to hope','verb'],['B1','wünschen','to wish','verb'],['B1','fühlen','to feel','verb'],['B1','ändern','to change','verb'],['B1','verbessern','to improve','verb'],['B1','entwickeln','to develop','verb'],['B1','erreichen','to achieve / reach','verb'],['B1','vermeiden','to avoid','verb'],['B1','erlauben','to allow','verb'],['B1','verbieten','to forbid','verb'],['B1','empfehlen','to recommend','verb'],['B1','erwarten','to expect','verb'],['B1','passieren','to happen','verb'],['B1','gehören','to belong','verb'],['B1','bedeuten','to mean','verb'],['B1','gelten','to apply / be valid','verb'],['B1','fehlen','to be missing','verb'],['B1','schaffen','to manage / create','verb'],['B1','obwohl','although','connector'],['B1','während','while / during','connector'],['B1','trotzdem','nevertheless','connector'],['B1','außerdem','furthermore','connector'],['B1','sondern','but rather','connector'],['B1','falls','if / in case','connector'],['B1','sobald','as soon as','connector'],['B1','damit','so that / with it','connector'],['B1','darüber','about it','adverb'],['B1','dafür','for it','adverb'],['B1','eigentlich','actually','adverb'],['B1','besonders','especially','adverb'],['B1','wahrscheinlich','probably','adverb'],['B1','natürlich','naturally / of course','adverb'],['B1','ungefähr','approximately','adverb'],['B1','gemeinsam','together / common','adjective'],['B1','unterschiedlich','different','adjective'],['B1','möglich','possible','adjective'],['B1','notwendig','necessary','adjective'],['B1','bekannt','known','adjective'],['B1','zufrieden','satisfied','adjective'],['B1','bereit','ready','adjective'],['B1','sicher','safe / certain','adjective'],['B1','klar','clear','adjective'],['B1','normal','normal','adjective'],['B1','die Erfahrung','experience','noun'],['B1','die Meinung','opinion','noun'],['B1','die Möglichkeit','possibility','noun'],['B1','die Entscheidung','decision','noun'],['B1','die Zukunft','future','noun'],['B1','die Vergangenheit','past','noun'],['B1','die Beziehung','relationship','noun'],['B1','die Gesellschaft','society','noun'],['B1','die Umwelt','environment','noun'],['B1','die Gesundheit','health','noun'],['B1','die Ausbildung','training / education','noun'],['B1','der Beruf','profession','noun'],['B1','die Reise','journey / trip','noun'],['B1','der Unterschied','difference','noun'],['B1','der Grund','reason','noun'],['B1','das Beispiel','example','noun'],['B1','das Ergebnis','result','noun'],['B1','die Situation','situation','noun'],['B1','die Chance','opportunity / chance','noun'],['B1','das Ziel','goal','noun'],['B1','die Lösung','solution','noun'],['B1','die Änderung','change','noun'],['B1','der Bereich','area / field','noun'],['B1','die Information','information','noun'],['B1','der Vorteil','advantage','noun'],
// B2 50
['B2','beeinflussen','to influence','verb'],['B2','beurteilen','to assess / judge','verb'],['B2','begründen','to justify','verb'],['B2','behaupten','to claim','verb'],['B2','betrachten','to consider / view','verb'],['B2','berücksichtigen','to take into account','verb'],['B2','darstellen','to present / depict','verb'],['B2','feststellen','to determine / establish','verb'],['B2','fördern','to promote','verb'],['B2','fordern','to demand','verb'],['B2','verfügen','to have at one’s disposal','verb'],['B2','vergleichen','to compare','verb'],['B2','voraussetzen','to require / presuppose','verb'],['B2','widersprechen','to contradict','verb'],['B2','zusammenhängen','to be connected','verb'],['B2','zunehmen','to increase','verb'],['B2','abnehmen','to decrease','verb'],['B2','entstehen','to arise','verb'],['B2','ermöglichen','to enable','verb'],['B2','verhindern','to prevent','verb'],['B2','allerdings','however','connector'],['B2','dennoch','nevertheless','connector'],['B2','hingegen','on the other hand','connector'],['B2','inzwischen','meanwhile','adverb'],['B2','insbesondere','in particular','adverb'],['B2','grundsätzlich','generally / fundamentally','adverb'],['B2','wesentlich','essential / significant','adjective'],['B2','deutlich','clear / significant','adjective'],['B2','erheblich','considerable','adjective'],['B2','angemessen','appropriate','adjective'],['B2','verantwortlich','responsible','adjective'],['B2','vergleichbar','comparable','adjective'],['B2','unabhängig','independent','adjective'],['B2','verfügbar','available','adjective'],['B2','betroffen','affected','adjective'],['B2','die Voraussetzung','prerequisite','noun'],['B2','die Maßnahme','measure','noun'],['B2','die Entwicklung','development','noun'],['B2','die Auswirkung','effect / impact','noun'],['B2','der Zusammenhang','connection / context','noun'],['B2','die Herausforderung','challenge','noun'],['B2','die Verantwortung','responsibility','noun'],['B2','die Regelung','regulation / arrangement','noun'],['B2','die Bedeutung','significance / meaning','noun'],['B2','die Bedingung','condition','noun'],['B2','die Fähigkeit','ability','noun'],['B2','der Einfluss','influence','noun'],['B2','der Anspruch','claim / entitlement','noun'],['B2','die Folge','consequence','noun'],['B2','der Zweck','purpose','noun'],
// C1 25
['C1','gewährleisten','to ensure','verb'],['C1','nachvollziehen','to comprehend / follow','verb'],['C1','einräumen','to concede / grant','verb'],['C1','hervorheben','to emphasize','verb'],['C1','abwägen','to weigh up','verb'],['C1','unterliegen','to be subject to','verb'],['C1','vorausgehen','to precede','verb'],['C1','verdeutlichen','to clarify / illustrate','verb'],['C1','wahrnehmen','to perceive / exercise','verb'],['C1','aufweisen','to exhibit / show','verb'],['C1','mithin','thus / consequently','connector'],['C1','insofern','insofar / in this respect','connector'],['C1','demnach','accordingly','connector'],['C1','folglich','consequently','connector'],['C1','weitgehend','largely','adverb'],['C1','maßgeblich','decisive / significant','adjective'],['C1','unerlässlich','indispensable','adjective'],['C1','hinreichend','sufficient','adjective'],['C1','nachhaltig','sustainable','adjective'],['C1','einschlägig','relevant / applicable','adjective'],['C1','die Abwägung','balancing / weighing','noun'],['C1','die Gegebenheit','circumstance / condition','noun'],['C1','der Umstand','circumstance','noun'],['C1','die Auffassung','view / opinion','noun'],['C1','die Tragweite','scope / significance','noun']
].map((w,i)=>({id:i+1,level:w[0],de:w[1],en:w[2],type:w[3]}));

const levelCounts={A1:50,A2:50,B1:75,B2:50,C1:25};
const levelLabels={A1:'Foundation',A2:'Everyday',B1:'Independent',B2:'Advanced',C1:'Proficient'};
let activeLevel='A1';
let progress=JSON.parse(localStorage.getItem('deutsch250-progress')||'{}');
let currentQuiz=null;
let quizAnswered=0;
let quizCorrect=0;
const $=s=>document.querySelector(s);

function save(){
  localStorage.setItem('deutsch250-progress',JSON.stringify(progress));
  updateDashboard();
}
function state(id){return progress[id]||'new'}
function setState(id,val){
  if(state(id)===val) delete progress[id]; else progress[id]=val;
  save(); renderWords(); showToast(val==='mastered'?'Nice — word mastered ✓':val==='learning'?'Added to your learning queue':'Moved back to new');
}
function showToast(message){
  const toast=$('#toast'); toast.textContent=message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}
function speak(text){
  if(!('speechSynthesis' in window)){showToast('Speech is not supported in this browser.');return;}
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=.88; speechSynthesis.speak(u);
}

function initTheme(){
  const saved=localStorage.getItem('deutsch250-theme');
  const preferred=saved || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.dataset.theme=preferred; updateThemeIcon();
}
function updateThemeIcon(){ $('#themeToggle').textContent=document.documentElement.dataset.theme==='dark'?'☀':'☾'; }
$('#themeToggle').addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next; localStorage.setItem('deutsch250-theme',next); updateThemeIcon();
});

function initLevels(){
  const wrap=$('#levelButtons');
  wrap.innerHTML=Object.entries(levelCounts).map(([l,c])=>`<button class="level-btn ${l===activeLevel?'active':''}" data-level="${l}"><b>${l}</b><span>${c} words</span><small>${levelLabels[l]}</small></button>`).join('');
  const q=$('#quizLevel');
  q.innerHTML=Object.keys(levelCounts).map(l=>`<option value="${l}">${l} · ${levelCounts[l]} words</option>`).join('');
  q.value=activeLevel;
}
$('#levelButtons').addEventListener('click',e=>{
  const b=e.target.closest('.level-btn'); if(!b)return;
  activeLevel=b.dataset.level; initLevels(); renderWords();
});

function renderWords(){
  const q=$('#searchInput').value.trim().toLowerCase(); const sf=$('#statusFilter').value;
  const list=words.filter(w=>{
    const matchesText=!q || w.de.toLowerCase().includes(q) || w.en.toLowerCase().includes(q);
    const matchesLevel=q ? true : w.level===activeLevel;
    return matchesText && matchesLevel && (sf==='all'||state(w.id)===sf);
  });
  $('#wordCount').textContent=`${list.length} word${list.length===1?'':'s'}`;
  $('#filterHint').textContent=q?' across all levels':` in ${activeLevel}`;
  $('#wordGrid').innerHTML=list.length?list.map(w=>{
    const s=state(w.id);
    return `<article class="word-card" data-level="${w.level}">
      <div class="word-top">
        <span class="tag">${w.level} · ${w.type}</span>
        <div class="word-top-right"><span class="status-dot ${s}"></span><span class="status-text">${s}</span><button class="speaker-btn" data-speak="${escapeHtml(w.de)}" type="button" aria-label="Listen to ${escapeHtml(w.de)}">♪</button></div>
      </div>
      <h3>${escapeHtml(w.de)}</h3><p class="meaning">${escapeHtml(w.en)}</p>
      <div class="word-actions">
        <button data-id="${w.id}" data-state="learning" class="${s==='learning'?'active-learning':''}">Learning</button>
        <button data-id="${w.id}" data-state="mastered" class="${s==='mastered'?'active-mastered':''}">Mastered</button>
      </div>
    </article>`;
  }).join(''):'<div class="empty-state"><strong>No words found.</strong><br>Try another search or filter.</div>';
}
function escapeHtml(v){return String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
$('#wordGrid').addEventListener('click',e=>{
  const speaker=e.target.closest('[data-speak]'); if(speaker){speak(speaker.dataset.speak);return;}
  const b=e.target.closest('button[data-id]'); if(!b)return; setState(b.dataset.id,b.dataset.state);
});
$('#searchInput').addEventListener('input',renderWords);
$('#statusFilter').addEventListener('change',renderWords);
document.addEventListener('click',e=>{const s=e.target.closest('[data-speak]');if(s && !s.closest('#wordGrid')) speak(s.dataset.speak)});

function newQuiz(resetRound=false){
  if(resetRound){quizAnswered=0;quizCorrect=0;updateQuizScore();}
  if(quizAnswered>=10){
    $('#quizWord').textContent='Round complete!';
    $('#quizOptions').innerHTML=`<button class="quiz-option" id="restartQuiz">Start another round</button>`;
    $('#quizFeedback').textContent=`You scored ${quizCorrect} out of 10.`;
    $('#quizCounter').textContent='10 questions done'; $('#nextQuiz').classList.add('hidden'); return;
  }
  const lvl=$('#quizLevel').value||'A1'; const pool=words.filter(w=>w.level===lvl);
  currentQuiz=pool[Math.floor(Math.random()*pool.length)];
  const wrong=pool.filter(w=>w.id!==currentQuiz.id).sort(()=>Math.random()-.5).slice(0,3);
  const opts=[currentQuiz,...wrong].sort(()=>Math.random()-.5);
  $('#quizWord').textContent=currentQuiz.de; $('#quizFeedback').textContent=''; $('#nextQuiz').classList.add('hidden');
  $('#quizCounter').textContent=`Question ${quizAnswered+1} of 10`;
  $('#quizOptions').innerHTML=opts.map(o=>`<button class="quiz-option" data-id="${o.id}">${escapeHtml(o.en)}</button>`).join('');
}
function updateQuizScore(){ $('#quizScore').textContent=`${quizCorrect} / ${quizAnswered}`; }
$('#quizOptions').addEventListener('click',e=>{
  if(e.target.id==='restartQuiz'){newQuiz(true);return;}
  const b=e.target.closest('.quiz-option[data-id]'); if(!b || document.querySelector('.quiz-option.correct'))return;
  const ok=Number(b.dataset.id)===currentQuiz.id;
  document.querySelectorAll('.quiz-option[data-id]').forEach(x=>{if(Number(x.dataset.id)===currentQuiz.id)x.classList.add('correct')});
  if(!ok)b.classList.add('wrong');
  quizAnswered++; if(ok)quizCorrect++; updateQuizScore();
  $('#quizFeedback').textContent=ok?'Correct — schön! ✓':`Not quite. “${currentQuiz.de}” means “${currentQuiz.en}”.`;
  $('#nextQuiz').textContent=quizAnswered>=10?'See result →':'Next question →'; $('#nextQuiz').classList.remove('hidden');
  if(ok&&state(currentQuiz.id)==='new'){progress[currentQuiz.id]='learning';save();}
});
$('#nextQuiz').addEventListener('click',()=>newQuiz(false));
$('#quizLevel').addEventListener('change',()=>newQuiz(true));
$('#quizSpeak').addEventListener('click',()=>{if(currentQuiz)speak(currentQuiz.de)});

function updateDashboard(){
  let mastered=0,learning=0;
  words.forEach(w=>{if(state(w.id)==='mastered')mastered++;else if(state(w.id)==='learning')learning++});
  const pct=Math.round(mastered/words.length*100);
  $('#masteredCount').textContent=mastered; $('#learningCount').textContent=learning; $('#newCount').textContent=words.length-mastered-learning; $('#overallPercent').textContent=`${pct}%`;
  $('#overallRing').style.setProperty('--p',`${pct*3.6}deg`);
  $('#masteryMessage').textContent=pct===0?'Your journey starts here.':pct<25?'You’re building momentum.':pct<60?'Great progress — keep going.':pct<100?'You’re getting close.':'All 250 words mastered!';
  $('#progressBars').innerHTML=Object.keys(levelCounts).map(l=>{
    const ws=words.filter(w=>w.level===l); const m=ws.filter(w=>state(w.id)==='mastered').length; const p=Math.round(m/ws.length*100);
    return `<div class="bar-row"><b>${l}</b><div class="bar"><div style="width:${p}%"></div></div><span>${m}/${ws.length}</span></div>`;
  }).join('');
}
$('#resetProgress').addEventListener('click',()=>{
  if(confirm('Reset all learning progress?')){progress={};save();renderWords();showToast('Progress reset.');}
});

$('#randomWordBtn').addEventListener('click',()=>{
  const w=words[Math.floor(Math.random()*words.length)]; activeLevel=w.level; initLevels(); $('#searchInput').value=w.de; renderWords();
  document.querySelector('#learn').scrollIntoView({behavior:'smooth'}); setTimeout(()=>speak(w.de),500);
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

initTheme(); initLevels(); renderWords(); updateDashboard(); newQuiz(true);
