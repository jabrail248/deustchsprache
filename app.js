const azTranslations = [
  'olmaq',
  'sahib olmaq',
  'olmaq / çevrilmək',
  'bacarmaq',
  'məcbur olmaq / gərək',
  'etmək / hazırlamaq',
  'demək',
  'getmək',
  'gəlmək',
  'görmək',
  'vermək',
  'bilmək',
  'tapmaq',
  'qalmaq',
  'götürmək',
  'danışmaq',
  'öyrənmək',
  'işləmək',
  'yaşamaq',
  'ehtiyac duymaq',
  'mən',
  'sən',
  'o (kişi)',
  'o (qadın) / onlar',
  'biz',
  'müəyyən artikl / o',
  'müəyyən artikl (kişi cinsi)',
  'müəyyən artikl (qadın cinsi / cəm)',
  'bir / qeyri-müəyyən artikl',
  'heç bir / ... deyil',
  'və',
  'və ya',
  'amma',
  'həmçinin / də',
  'deyil / yox',
  'burada',
  'orada',
  'bu gün',
  'indi',
  'həmişə',
  'yaxşı',
  'böyük / hündür',
  'kiçik',
  'yeni',
  'köhnə / yaşlı',
  'kişi',
  'qadın',
  'uşaq',
  'vaxt / zaman',
  'gün',
  'soruşmaq',
  'cavab vermək',
  'danışmaq / nəql etmək',
  'izah etmək',
  'kömək etmək',
  'göstərmək',
  'gətirmək',
  'almaq',
  'ödəmək',
  'gözləmək',
  'başlamaq',
  'bitmək / sona çatmaq',
  'sürmək / nəqliyyatla getmək',
  'qaçmaq / piyada getmək',
  'yemək',
  'içmək',
  'yatmaq',
  'görüşmək',
  'ziyarət etmək',
  'unutmaq',
  'artıq',
  'hələ / daha',
  'yenidən',
  'tez-tez',
  'bəzən',
  'bəlkə',
  'buna görə',
  'sonra / onda',
  'əvvəlcə',
  'daha sonra',
  'vacib',
  'düzgün',
  'səhv / yanlış',
  'asan / sadə',
  'çətin',
  'sürətli / tez',
  'yavaş',
  'bahalı',
  'ucuz',
  'azad / boş',
  'iş',
  'pul',
  'ailə',
  'mənzil',
  'məktəb',
  'şəhər',
  'problem',
  'sual',
  'cavab',
  'il',
  'düşünmək',
  'inanmaq / düşünmək',
  'fikirləşmək / nəzərdə tutmaq',
  'başa düşmək',
  'qərar vermək',
  'cəhd etmək',
  'planlaşdırmaq',
  'ümid etmək',
  'arzulamaq',
  'hiss etmək',
  'dəyişmək',
  'yaxşılaşdırmaq',
  'inkişaf etdirmək',
  'nail olmaq / çatmaq',
  'qaçınmaq',
  'icazə vermək',
  'qadağan etmək',
  'tövsiyə etmək',
  'gözləmək',
  'baş vermək',
  'aid olmaq',
  'məna vermək',
  'qüvvədə olmaq / sayılmaq',
  'çatışmamaq / əskik olmaq',
  'bacarmaq / yaratmaq',
  'baxmayaraq ki',
  'zamanı / ikən',
  'buna baxmayaraq',
  'bundan əlavə',
  'əksinə / deyil, ...',
  'əgər / olduğu halda',
  '... kimi / dərhal ki',
  'bununla / deyə',
  'bu barədə',
  'bunun üçün',
  'əslində',
  'xüsusilə',
  'yəqin ki / ehtimal ki',
  'əlbəttə / təbii olaraq',
  'təxminən',
  'birlikdə / ortaq',
  'fərqli',
  'mümkün',
  'zəruri',
  'tanınmış / məlum',
  'razı / məmnun',
  'hazır',
  'təhlükəsiz / əmin',
  'aydın',
  'normal',
  'təcrübə',
  'fikir',
  'imkan',
  'qərar',
  'gələcək',
  'keçmiş',
  'münasibət',
  'cəmiyyət',
  'ətraf mühit',
  'sağlamlıq',
  'peşə təhsili / təhsil',
  'peşə',
  'səyahət',
  'fərq',
  'səbəb',
  'nümunə',
  'nəticə',
  'vəziyyət',
  'şans / imkan',
  'məqsəd',
  'həll',
  'dəyişiklik',
  'sahə',
  'məlumat',
  'üstünlük',
  'təsir etmək',
  'qiymətləndirmək / mühakimə etmək',
  'əsaslandırmaq',
  'iddia etmək',
  'nəzərdən keçirmək / baxmaq',
  'nəzərə almaq',
  'təqdim etmək / təsvir etmək',
  'müəyyən etmək / aşkar etmək',
  'təşviq etmək / dəstəkləmək',
  'tələb etmək',
  'ixtiyarında olmaq / malik olmaq',
  'müqayisə etmək',
  'tələb etmək / şərt saymaq',
  'zidd olmaq / etiraz etmək',
  'əlaqəli olmaq',
  'artmaq',
  'azalmaq',
  'yaranmaq',
  'imkan yaratmaq',
  'qarşısını almaq',
  'lakin / hərçənd',
  'buna baxmayaraq',
  'əksinə / digər tərəfdən',
  'bu arada / artıq',
  'xüsusilə',
  'prinsipcə / ümumiyyətlə',
  'mühüm / əhəmiyyətli',
  'aydın / nəzərəçarpacaq',
  'əhəmiyyətli / xeyli',
  'uyğun / münasib',
  'məsul',
  'müqayisə edilə bilən',
  'müstəqil',
  'mövcud / əlçatan',
  'təsirlənmiş / aidiyyəti',
  'ilkin şərt',
  'tədbir',
  'inkişaf',
  'təsir / nəticə',
  'əlaqə / kontekst',
  'çətinlik / çağırış',
  'məsuliyyət',
  'tənzimləmə / qayda',
  'məna / əhəmiyyət',
  'şərt',
  'bacarıq / qabiliyyət',
  'təsir',
  'tələb / hüquq',
  'nəticə',
  'məqsəd / təyinat',
  'təmin etmək / zəmanət vermək',
  'anlamaq / məntiqini izləmək',
  'etiraf etmək / vermək',
  'vurğulamaq',
  'ölçüb-biçmək',
  'tabe olmaq / məruz qalmaq',
  'öncə gəlmək',
  'aydınlaşdırmaq / göstərmək',
  'qavramaq / həyata keçirmək',
  'malik olmaq / göstərmək',
  'beləliklə / deməli',
  'bu baxımdan / o dərəcədə ki',
  'buna əsasən / deməli',
  'nəticə etibarilə / beləliklə',
  'böyük ölçüdə',
  'həlledici / əsas',
  'əvəzolunmaz / zəruri',
  'kifayət qədər / yetərli',
  'davamlı',
  'müvafiq / tətbiq olunan',
  'ölçüb-biçmə / balanslaşdırma',
  'mövcud şərait / vəziyyət',
  'hal / şərait',
  'mövqe / fikir',
  'əhatə dairəsi / əhəmiyyət'
];

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
].map((w,i)=>({id:i+1,level:w[0],de:w[1],en:w[2],az:azTranslations[i],type:w[3]}));

const levelCounts={A1:50,A2:50,B1:75,B2:50,C1:25};
let activeLevel='A1';
function safeGet(key, fallback=''){
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (e) {
    return fallback;
  }
}
function safeSet(key, value){
  try { localStorage.setItem(key, value); } catch (e) { /* keep site usable */ }
}
let translationLanguage=safeGet('deutsch250-language','az');
if(!['az','en'].includes(translationLanguage)) translationLanguage='az';
let progress={};
try { progress=JSON.parse(safeGet('deutsch250-progress','{}'))||{}; } catch(e) { progress={}; }
if(!progress || typeof progress!=='object' || Array.isArray(progress)) progress={};
Object.keys(progress).forEach(id=>{if(!words.some(w=>String(w.id)===id)||!['learning','mastered'].includes(progress[id]))delete progress[id];});
let currentQuiz=null;
let quizSelected=null;
let quizComplete=false;
let quizAnswered=0;
let quizCorrect=0;
const $=s=>document.querySelector(s);


const uiText = {
  az: {
    navWords:'Sözlər', navQuiz:'Quiz', navProgress:'Proqres',
    heroBadge:'250 vacib söz · A1 → C1', heroEyebrow:'ALMAN DİLİNİ DAHA AĞILLI ÖYRƏN',
    heroTitle:'Həqiqətən <em>işlədəcəyin</em> Alman sözlərini öyrən.',
    heroLead:'A1-dən C1-ə qədər 250 vacib Alman sözü. Azərbaycan və İngilis tərcümələri, tələffüz, quiz və proqres izləmə — hamısı bir yerdə.',
    startLearning:'Öyrənməyə başla <span>→</span>', randomWord:'Təsadüfi söz',
    trustLevelsTitle:'5 səviyyə', trustLevelsSub:'A1-dən C1-ə', trustProgressTitle:'Proqresi izlə', trustProgressSub:'Brauzerdə saxlanılır', trustPronTitle:'Tələffüz', trustPronSub:'Bir kliklə',
    heroType:'B2 · FEL', heroWordNumber:'SÖZ 176', example:'Nümunə', learning:'Öyrənilir', mastered:'Öyrənildi', new:'Yeni', thisLevel:'Bu səviyyə',
    learnEyebrow:'SÖZLÜYÜ KƏŞF ET', learnTitle:'Səviyyəni seç.', learnCopy:'Səviyyə-səviyyə öyrən və ya 250 söz arasında dərhal axtar.',
    searchPlaceholder:'Almanca və ya Azərbaycan dilində axtar…', allWords:'Bütün sözlər',
    quizEyebrow:'SÜRƏTLİ MƏŞQ', quizTitle:'Sözü yadda saxla.', quizCopy:'10 qısa sual. Dərhal nəticəni gör və yeni sözləri praktikada möhkəmləndir.', quizLevel:'Səviyyə', quizScore:'Nəticə', quizPrompt:'Bu söz nə deməkdir?', nextQuestion:'Növbəti sual →', seeResult:'Nəticəyə bax →',
    progressEyebrow:'SƏNİN PROQRESİN', progressTitle:'Kiçik addımlar böyük nəticə verir.', progressCopy:'Sözləri “Öyrənilir” və ya “Öyrənildi” kimi qeyd et və irəliləyişini izlə.', resetProgress:'Proqresi sıfırla', overallProgress:'ÜMUMİ PROQRES',
    progressDescription:'Sözləri addım-addım öyrən. Proqresin bu brauzerdə saxlanılır.', masteredSub:'söz tamamlandı', learningSub:'öyrənmə siyahısında', newSub:'öyrənilməyi gözləyir', levelsProgressTitle:'Səviyyələr üzrə proqres', levelsProgressSub:'Öyrənilmiş sözlər',
    footerDescription:'Alman dili üçün məqsədli söz bazası.', footerNote:'Sadə və sürətli · Hesab tələb olunmur',
    noWords:'Söz tapılmadı.', tryAnother:'Başqa axtarış və ya filtr sına.', allLevels:'bütün səviyyələrdə', words:'söz',
    question:'Sual', quizComplete:'Quiz tamamlandı!', restart:'Yenidən başla', questionsComplete:'10 sual tamamlandı',
    correct:'Doğrudur ✓', incorrectPrefix:'Yanlışdır.', means:'deməkdir.',
    startMsg:'Sənin öyrənmə yolun buradan başlayır.', goodStart:'Yaxşı başlanğıcdır.', greatProgress:'Əla irəliləyiş — davam et.', almostThere:'Məqsədə çox yaxınsan.', allLearned:'250 sözün hamısını öyrəndin!',
    resetConfirm:'Bütün öyrənmə proqresini sıfırlamaq istəyirsən?', resetDone:'Proqres sıfırlandı.',
    learnedToast:'Söz öyrənildi ✓', learningToast:'Öyrənmə siyahısına əlavə edildi', newToast:'Yeni sözlərə qaytarıldı', speechUnsupported:'Bu brauzerdə tələffüz dəstəklənmir.',
    langToast:'Tərcümələr Azərbaycan dilində göstərilir.'
  },
  en: {
    navWords:'Words', navQuiz:'Quiz', navProgress:'Progress',
    heroBadge:'250 essential words · A1 → C1', heroEyebrow:'LEARN GERMAN SMARTER',
    heroTitle:'Learn the German words you will <em>actually use</em>.',
    heroLead:'250 essential German words from A1 to C1. English and Azerbaijani translations, pronunciation, quizzes and progress tracking — all in one place.',
    startLearning:'Start learning <span>→</span>', randomWord:'Random word',
    trustLevelsTitle:'5 levels', trustLevelsSub:'A1 to C1', trustProgressTitle:'Track progress', trustProgressSub:'Saved in your browser', trustPronTitle:'Pronunciation', trustPronSub:'One click',
    heroType:'B2 · VERB', heroWordNumber:'WORD 176', example:'Example', learning:'Learning', mastered:'Mastered', new:'New', thisLevel:'This level',
    learnEyebrow:'EXPLORE THE VOCABULARY', learnTitle:'Choose your level.', learnCopy:'Learn level by level or search instantly across all 250 words.',
    searchPlaceholder:'Search in German or English…', allWords:'All words',
    quizEyebrow:'QUICK PRACTICE', quizTitle:'Make the word stick.', quizCopy:'10 quick questions. Get instant feedback and reinforce new vocabulary.', quizLevel:'Level', quizScore:'Score', quizPrompt:'What does this word mean?', nextQuestion:'Next question →', seeResult:'See results →',
    progressEyebrow:'YOUR PROGRESS', progressTitle:'Small steps create big results.', progressCopy:'Mark words as “Learning” or “Mastered” and track your progress.', resetProgress:'Reset progress', overallProgress:'OVERALL PROGRESS',
    progressDescription:'Learn words step by step. Your progress is saved in this browser.', masteredSub:'words completed', learningSub:'in your queue', newSub:'waiting for you', levelsProgressTitle:'Progress by level', levelsProgressSub:'Mastered words',
    footerDescription:'A focused German vocabulary base.', footerNote:'Simple and fast · No account required',
    noWords:'No words found.', tryAnother:'Try another search or filter.', allLevels:'across all levels', words:'words',
    question:'Question', quizComplete:'Quiz complete!', restart:'Restart quiz', questionsComplete:'10 questions complete',
    correct:'Correct ✓', incorrectPrefix:'Not quite.', means:'means',
    startMsg:'Your learning journey starts here.', goodStart:'A good start.', greatProgress:'Great progress — keep going.', almostThere:'You are very close to the goal.', allLearned:'You mastered all 250 words!',
    resetConfirm:'Reset all learning progress?', resetDone:'Progress reset.',
    learnedToast:'Word mastered ✓', learningToast:'Added to your learning queue', newToast:'Moved back to new words', speechUnsupported:'Pronunciation is not supported in this browser.',
    langToast:'Translations are shown in English.'
  }
};
const levelLabelsByLang={
  az:{A1:'Təməl',A2:'Gündəlik',B1:'Müstəqil',B2:'Yuxarı',C1:'İrəli'},
  en:{A1:'Foundation',A2:'Everyday',B1:'Independent',B2:'Upper',C1:'Advanced'}
};
const typeLabels={
  az:{verb:'fel',pronoun:'əvəzlik',article:'artikl',connector:'bağlayıcı',adverb:'zərf',adjective:'sifət',noun:'isim'},
  en:{verb:'verb',pronoun:'pronoun',article:'article',connector:'connector',adverb:'adverb',adjective:'adjective',noun:'noun'}
};
function t(key){ return uiText[translationLanguage][key]; }
function meaning(w){ return translationLanguage==='az' ? w.az : w.en; }
function setText(id,value,html=false){ const el=$(id); if(el) html?el.innerHTML=value:el.textContent=value; }
function updateStaticLanguageUI(){
  document.documentElement.lang=translationLanguage;
  document.title=translationLanguage==='az'?'Deutsch250 — Alman dilində 250 vacib söz':'Deutsch250 — 250 Essential German Words';
  document.querySelectorAll('.language-toggle button').forEach(b=>b.classList.toggle('active',b.dataset.lang===translationLanguage));
  const pairs={
    '#navWords':'navWords','#navQuiz':'navQuiz','#navProgress':'navProgress','#heroBadge':'heroBadge','#heroEyebrow':'heroEyebrow','#heroLead':'heroLead','#randomWordBtn':'randomWord',
    '#trustLevelsTitle':'trustLevelsTitle','#trustLevelsSub':'trustLevelsSub','#trustProgressTitle':'trustProgressTitle','#trustProgressSub':'trustProgressSub','#trustPronTitle':'trustPronTitle','#trustPronSub':'trustPronSub',
    '#heroType':'heroType','#heroWordNumber':'heroWordNumber','#heroExampleLabel':'example','#heroLearningBtn':'learning','#heroMasteredBtn':'mastered','#heroLevelProgressLabel':'thisLevel',
    '#learnEyebrow':'learnEyebrow','#learnTitle':'learnTitle','#learnCopy':'learnCopy','#statusAll':'allWords','#statusNew':'new','#statusLearning':'learning','#statusMastered':'mastered',
    '#quizEyebrow':'quizEyebrow','#quizTitle':'quizTitle','#quizCopy':'quizCopy','#quizLevelLabel':'quizLevel','#quizScoreLabel':'quizScore','#quizPrompt':'quizPrompt',
    '#progressEyebrow':'progressEyebrow','#progressTitle':'progressTitle','#progressCopy':'progressCopy','#resetProgress':'resetProgress','#overallProgressLabel':'overallProgress','#progressDescription':'progressDescription',
    '#masteredLabel':'mastered','#masteredSub':'masteredSub','#learningLabel':'learning','#learningSub':'learningSub','#newLabel':'new','#newSub':'newSub','#levelsProgressTitle':'levelsProgressTitle','#levelsProgressSub':'levelsProgressSub',
    '#footerDescription':'footerDescription','#footerNote':'footerNote'
  };
  Object.entries(pairs).forEach(([id,key])=>setText(id,t(key)));
  setText('#heroTitle',t('heroTitle'),true);
  setText('#startLearningBtn',t('startLearning'),true);
  setText('#heroMasteredBtn',t('mastered')+' ✓');
  const search=$('#searchInput'); if(search) search.placeholder=t('searchPlaceholder');
  setText('#heroMeaning',translationLanguage==='az'?'təsir etmək':'to influence');
  setText('#heroExampleTranslation',translationLanguage==='az'?'Sosial media qərarlarımıza təsir edir.':'Social media influences our decisions.');
}
function updateLanguageUI(){
  updateStaticLanguageUI();
  initLevels();
  renderWords();
  updateDashboard();
  updateFeatureUI();
  updateStoryUI();
  renderAudioUI();
  if(quizComplete){newQuiz(false);return;}
  if(currentQuiz){
    setText('#quizPrompt',t('quizPrompt'));
    setText('#quizCounter',`${t('question')} ${Math.min(quizAnswered+(quizSelected===null?1:0),10)} / 10`);
    setText('#nextQuiz',quizAnswered>=10?t('seeResult'):t('nextQuestion'));
    renderCurrentQuizOptions();
  }
}

$('#languageToggle').addEventListener('click',e=>{
  const b=e.target.closest('button[data-lang]');
  if(!b)return;
  const nextLanguage=b.dataset.lang;
  if(!['az','en'].includes(nextLanguage))return;
  translationLanguage=nextLanguage;
  safeSet('deutsch250-language',translationLanguage);
  updateLanguageUI();
  showToast(t('langToast'));
});

function save(){
  safeSet('deutsch250-progress',JSON.stringify(progress));
  updateDashboard();
}
function state(id){return progress[id]||'new'}
function setState(id,val){
  if(state(id)===val) delete progress[id]; else progress[id]=val;
  save(); syncWordReview(id); renderWords(); showToast(state(id)==='mastered'?t('learnedToast'):state(id)==='learning'?t('learningToast'):t('newToast'));
}
function showToast(message){
  const toast=$('#toast'); toast.textContent=message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}
function speak(text){
  if(!('speechSynthesis' in window)){showToast(t('speechUnsupported'));return;}
  cancelStorySpeech();
  window.speechSynthesis.cancel();
  const u=configureSpeech(new SpeechSynthesisUtterance(text));
  u.onerror=showAudioError;window.speechSynthesis.speak(u);
}

function initTheme(){
  const saved=safeGet('deutsch250-theme','');
  const preferred=saved || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.dataset.theme=preferred; updateThemeIcon();
}
function updateThemeIcon(){ $('#themeToggle').textContent=document.documentElement.dataset.theme==='dark'?'☀':'☾'; }
$('#themeToggle').addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next; safeSet('deutsch250-theme',next); updateThemeIcon();
});

function initLevels(){
  const wrap=$('#levelButtons');
  wrap.innerHTML=Object.entries(levelCounts).map(([l,c])=>`<button class="level-btn ${l===activeLevel?'active':''}" data-level="${l}"><b>${l}</b><span>${c} ${t('words')}</span><small>${levelLabelsByLang[translationLanguage][l]}</small></button>`).join('');
  const q=$('#quizLevel');
  const previousQuizLevel=q.value;
  q.innerHTML=Object.keys(levelCounts).map(l=>`<option value="${l}">${l} · ${levelCounts[l]} ${t('words')}</option>`).join('');
  q.value=previousQuizLevel||activeLevel;
}
$('#levelButtons').addEventListener('click',e=>{
  const b=e.target.closest('.level-btn'); if(!b)return;
  activeLevel=b.dataset.level; initLevels(); renderWords();
});

function renderWords(){
  const q=$('#searchInput').value.trim().toLowerCase(); const sf=$('#statusFilter').value;
  const list=words.filter(w=>{
    const matchesText=!q || w.de.toLowerCase().includes(q) || w.en.toLowerCase().includes(q) || w.az.toLowerCase().includes(q);
    const matchesLevel=q ? true : w.level===activeLevel;
    return matchesText && matchesLevel && (sf==='all'||state(w.id)===sf);
  });
  $('#wordCount').textContent=`${list.length} ${t('words')}`;
  $('#filterHint').textContent=q?` · ${t('allLevels')}`:` · ${activeLevel}`;
  $('#wordGrid').innerHTML=list.length?list.map(w=>{
    const s=state(w.id);
    return `<article class="word-card" data-level="${w.level}">
      <div class="word-top">
        <span class="tag">${w.level} · ${typeLabels[translationLanguage][w.type]||w.type}</span>
        <div class="word-top-right"><span class="status-dot ${s}"></span><span class="status-text">${translationLanguage==='az'?({new:'yeni',learning:'öyrənilir',mastered:'öyrənildi'}[s]):s}</span><button class="speaker-btn" data-speak="${escapeHtml(w.de)}" type="button" aria-label="Listen to ${escapeHtml(w.de)}">♪</button></div>
      </div>
      <h3 lang="de">${escapeHtml(w.de)}</h3><p class="meaning">${escapeHtml(meaning(w))}</p>
      ${examplesHTML(w)}
      <div class="word-actions">
        <button data-id="${w.id}" data-state="learning" class="${s==='learning'?'active-learning':''}">${translationLanguage==='az'?'Öyrənilir':'Learning'}</button>
        <button data-id="${w.id}" data-state="mastered" class="${s==='mastered'?'active-mastered':''}">${translationLanguage==='az'?'Öyrənildi':'Mastered'}</button>
      </div>
    </article>`;
  }).join(''):`<div class="empty-state"><strong>${t('noWords')}</strong><br>${t('tryAnother')}</div>`;
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
  if(resetRound){quizAnswered=0;quizCorrect=0;quizComplete=false;updateQuizScore();}
  if(quizAnswered>=10){
    quizComplete=true;
    $('#quizWord').textContent=t('quizComplete');
    $('#quizOptions').innerHTML=`<button class="quiz-option" id="restartQuiz">${t('restart')}</button>`;
    $('#quizFeedback').textContent=translationLanguage==='az'?`10 sualdan ${quizCorrect} düzgün cavab verdin.`:`You answered ${quizCorrect} of 10 questions correctly.`;
    $('#quizCounter').textContent=t('questionsComplete'); $('#nextQuiz').classList.add('hidden'); return;
  }
  quizSelected=null;
  const lvl=$('#quizLevel').value||'A1'; const pool=words.filter(w=>w.level===lvl);
  currentQuiz=pool[Math.floor(Math.random()*pool.length)];
  const wrong=pool.filter(w=>w.id!==currentQuiz.id).sort(()=>Math.random()-.5).slice(0,3);
  const opts=[currentQuiz,...wrong].sort(()=>Math.random()-.5);
  currentQuiz.options=opts;
  $('#quizWord').textContent=currentQuiz.de; $('#quizFeedback').textContent=''; $('#nextQuiz').classList.add('hidden');
  $('#quizCounter').textContent=`${t('question')} ${quizAnswered+1} / 10`;
  renderCurrentQuizOptions();
}
function renderCurrentQuizOptions(){
  if(!currentQuiz || !currentQuiz.options)return;
  $('#quizOptions').innerHTML=currentQuiz.options.map(o=>`<button class="quiz-option" data-id="${o.id}">${escapeHtml(meaning(o))}</button>`).join('');
  if(quizSelected!==null)renderQuizAnswer();
}
function renderQuizAnswer(){
  const ok=quizSelected===currentQuiz.id;
  document.querySelectorAll('.quiz-option[data-id]').forEach(button=>{button.disabled=true;button.classList.toggle('correct',Number(button.dataset.id)===currentQuiz.id);button.classList.toggle('wrong',!ok&&Number(button.dataset.id)===quizSelected);});
  $('#quizFeedback').textContent=ok?t('correct'):(translationLanguage==='az'?`Yanlışdır. “${currentQuiz.de}” “${meaning(currentQuiz)}” deməkdir.`:`Not quite. “${currentQuiz.de}” means “${meaning(currentQuiz)}”.`);
}
function updateQuizScore(){ $('#quizScore').textContent=`${quizCorrect} / ${quizAnswered}`; }
$('#quizOptions').addEventListener('click',e=>{
  if(e.target.id==='restartQuiz'){newQuiz(true);return;}
  const b=e.target.closest('.quiz-option[data-id]'); if(!b || quizSelected!==null)return;
  quizSelected=Number(b.dataset.id);
  const ok=quizSelected===currentQuiz.id;
  renderQuizAnswer();
  document.querySelectorAll('.quiz-option[data-id]').forEach(x=>{if(Number(x.dataset.id)===currentQuiz.id)x.classList.add('correct')});
  if(!ok)b.classList.add('wrong');
  quizAnswered++; if(ok)quizCorrect++; updateQuizScore();
  $('#quizFeedback').textContent=ok?(translationLanguage==='az'?'Doğrudur ✓':'Correct ✓'):(translationLanguage==='az'?`Yanlışdır. “${currentQuiz.de}” “${meaning(currentQuiz)}” deməkdir.`:`Not quite. “${currentQuiz.de}” means “${meaning(currentQuiz)}”.`);
  $('#nextQuiz').textContent=quizAnswered>=10?t('seeResult'):t('nextQuestion'); $('#nextQuiz').classList.remove('hidden');
  if(ok&&state(currentQuiz.id)==='new'){progress[currentQuiz.id]='learning';save();syncWordReview(currentQuiz.id);renderWords();}
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
  $('#masteryMessage').textContent=pct===0?t('startMsg'):pct<25?t('goodStart'):pct<60?t('greatProgress'):pct<100?t('almostThere'):t('allLearned');
  const b2percent=Math.round(words.filter(w=>w.level==='B2'&&state(w.id)==='mastered').length/levelCounts.B2*100);
  $('.mini-progress-card strong').textContent=b2percent+'%';
  $('.mini-progress-card .tiny-bar i').style.width=b2percent+'%';
  $('#progressBars').innerHTML=Object.keys(levelCounts).map(l=>{
    const ws=words.filter(w=>w.level===l); const m=ws.filter(w=>state(w.id)==='mastered').length; const p=Math.round(m/ws.length*100);
    return `<div class="bar-row"><b>${l}</b><div class="bar"><div style="width:${p}%"></div></div><span>${m}/${ws.length}</span></div>`;
  }).join('');
}
$('#resetProgress').addEventListener('click',()=>{
  if(confirm(ft('resetConfirm'))){progress={};resetReviews();save();renderWords();showToast(t('resetDone'));}
});

$('#randomWordBtn').addEventListener('click',()=>{
  const w=words[Math.floor(Math.random()*words.length)]; activeLevel=w.level; initLevels(); $('#searchInput').value=w.de; renderWords();
  document.querySelector('#learn').scrollIntoView({behavior:'smooth'}); setTimeout(()=>speak(w.de),500);
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

$('#heroLearningBtn').addEventListener('click',()=>setState(176,'learning'));
$('#heroMasteredBtn').addEventListener('click',()=>setState(176,'mastered'));
initAudio(); initStoryVocabulary(); initFeatures(); initStories(); initTheme(); updateLanguageUI(); newQuiz(true);
