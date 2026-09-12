// Activity navigation. Hash routes preserve links and browser Back/Forward.
const workspaceCopy={
 az:{home:'Ana səhifə',workspace:'Öyrənmə məkanı',vocabulary:'Söz ehtiyatı',words:'söz',stories:'Hekayələr',storiesCount:'hekayə',phrases:'Danışıq ifadələri',phrasesCount:'ifadə',review:'Yaddaşını möhkəmləndir',vocabularyCopy:'Mənanı, nümunələri və sözün formalarını birlikdə öyrən.',storiesCopy:'Qısa hekayə oxu. Yeni sözə toxun və mənasını gör.',phrasesCopy:'Gündəlik söhbətlərdə və işdə işlədəcəyin ifadələr.',reviewCopy:'Öyrəndiklərini təkrar et və çətin sözlərə qayıt.',yourProgress:'Sənin irəliləyişin',viewProgress:'Proqresə bax →',due:'təkrar gözləyir',quiz:'Quiz',progress:'Proqres',learn:'Söz ehtiyatı'},
 en:{home:'Home',workspace:'Your learning space',vocabulary:'Build your vocabulary',words:'words',stories:'Read a story',storiesCount:'stories',phrases:'Find the right phrase',phrasesCount:'phrases',review:'Make it stick',vocabularyCopy:'Learn meanings, examples and word forms together.',storiesCopy:'Read something short. Tap an unfamiliar word to understand it.',phrasesCopy:'Useful expressions for everyday conversations and working life.',reviewCopy:'Revisit what you have learned and give difficult words another go.',yourProgress:'Your progress',viewProgress:'View progress →',due:'ready to review',quiz:'Quiz',progress:'Progress',learn:'Vocabulary'}
};
let currentWorkspace='home';
function workspaceRoute(){const route=window.location.hash.slice(1);return ['home','learn','stories','phrases','review','quiz','progress'].includes(route)?route:'home';}
function renderWorkspace(){
 const copy=workspaceCopy[translationLanguage];
 document.querySelectorAll('[data-workspace-text]').forEach(el=>el.textContent=copy[el.dataset.workspaceText]);
 const mastered=words.filter(w=>state(w.id)==='mastered').length;
 $('#homeMasteredCount').textContent=`${mastered} / ${words.length.toLocaleString('en-US')}`;
 $('#homeProgressFill').style.width=(mastered/words.length*100)+'%';
 $('#homeProgressTrack').setAttribute('aria-valuenow',String(mastered));
 const due=Object.values(reviewData).filter(r=>r.due<=Date.now()).length;
 $('#homeDueCount').textContent=`${due} ${copy.due}`;
 $('#workspaceBreadcrumb').textContent='Sprachoo / '+(copy[currentWorkspace]||copy.workspace);
 if(typeof renderCourseChrome==='function')renderCourseChrome();
}
function showWorkspace(route,focus=false){
 if(route!==currentWorkspace){closeWordPopup(false);cancelStorySpeech();if('speechSynthesis' in window)window.speechSynthesis.cancel();}
 currentWorkspace=route;
 document.querySelectorAll('main > section').forEach(section=>{section.hidden=section.id!==route;section.setAttribute('tabindex','-1');});
 document.querySelectorAll('.topbar nav a').forEach(link=>{const selected=link.getAttribute('href')==='#'+route;link.classList.toggle('nav-active',selected);if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
 renderWorkspace();
 if(focus){$('#'+route).focus({preventScroll:true});window.scrollTo({top:0,behavior:'auto'});}
}
function navigateWorkspace(route){
 if(!['home','learn','stories','phrases','review','quiz','progress'].includes(route))return;
 if(window.location.hash!=='#'+route)window.location.hash=route;
 showWorkspace(route,true);
}
uiText.az.heroEyebrow='BU GÜN NƏ ÖYRƏNƏK?';uiText.en.heroEyebrow='A LITTLE GERMAN, EVERY DAY';
uiText.az.heroTitle='Öyrənməyə <em>davam et.</em>';uiText.en.heroTitle='Your next <em>small step.</em>';
uiText.az.heroLead='Bir hekayə, bir neçə yeni ifadə, bir az təkrar. Bu gün özünə uyğun məşqi seç.';
uiText.en.heroLead='A story, a few new phrases, a little review. Choose what you would like to practise today.';
uiText.az.startLearning='Sözləri öyrən <span>→</span>';uiText.en.startLearning='Explore vocabulary <span>→</span>';
updateStaticLanguageUI();

showWorkspace(workspaceRoute());
