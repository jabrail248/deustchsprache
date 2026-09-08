// Approximate teaching levels, not official CEFR certification.
const phrases = `
A1|Wie geht es dir?|How are you?|Necəsən?|Wie geht es dir heute?|How are you today?|Bu gün necəsən?
A1|Ich hätte gern …|I would like …|… istərdim.|Ich hätte gern einen Kaffee.|I would like a coffee.|Bir qəhvə istərdim.
A1|Wie viel kostet …?|How much does … cost?|… neçəyədir?|Wie viel kostet das Ticket?|How much does the ticket cost?|Bilet neçəyədir?
A1|Entschuldigung, wo ist …?|Excuse me, where is …?|Bağışlayın, … haradadır?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?|Bağışlayın, vağzal haradadır?
A1|Ich verstehe das nicht.|I do not understand that.|Mən bunu başa düşmürəm.|Ich verstehe das nicht. Bitte sprich langsam.|I do not understand that. Please speak slowly.|Mən bunu başa düşmürəm. Zəhmət olmasa, yavaş danış.
A1|Können Sie das bitte wiederholen?|Could you repeat that, please?|Zəhmət olmasa, bunu təkrar edə bilərsiniz?|Entschuldigung, können Sie das bitte wiederholen?|Excuse me, could you repeat that, please?|Bağışlayın, zəhmət olmasa, bunu təkrar edə bilərsiniz?
A2|Ich habe vor, … zu …|I intend to …|… etmək niyyətindəyəm.|Ich habe vor, morgen zu lernen.|I intend to study tomorrow.|Sabah dərs oxumaq niyyətindəyəm.
A2|Ich freue mich auf …|I am looking forward to …|… səbirsizliklə gözləyirəm.|Ich freue mich auf das Wochenende.|I am looking forward to the weekend.|Həftəsonunu səbirsizliklə gözləyirəm.
A2|Kannst du mir helfen?|Can you help me?|Mənə kömək edə bilərsən?|Kannst du mir beim Lernen helfen?|Can you help me with studying?|Dərs oxumaqda mənə kömək edə bilərsən?
A2|Ich bin auf der Suche nach …|I am looking for …|… axtarıram.|Ich bin auf der Suche nach einer Wohnung.|I am looking for an apartment.|Mənzil axtarıram.
A2|Das passt mir gut.|That suits me well.|Bu mənə uyğundur.|Montag um zehn? Das passt mir gut.|Monday at ten? That suits me well.|Bazar ertəsi saat onda? Bu mənə uyğundur.
A2|Ich hätte eine Frage.|I have a question.|Bir sualım var.|Ich hätte eine Frage zum Kurs.|I have a question about the course.|Kursla bağlı bir sualım var.
B1|Es kommt darauf an.|It depends.|Bu, vəziyyətdən asılıdır.|Es kommt darauf an, wie viel Zeit wir haben.|It depends on how much time we have.|Bu, nə qədər vaxtımızın olmasından asılıdır.
B1|Meiner Meinung nach …|In my opinion …|Mənim fikrimcə, …|Meiner Meinung nach ist das eine gute Idee.|In my opinion, that is a good idea.|Mənim fikrimcə, bu, yaxşı fikirdir.
B1|Ich bin damit einverstanden.|I agree with that.|Mən bununla razıyam.|Wir treffen uns morgen. Ich bin damit einverstanden.|We will meet tomorrow. I agree with that.|Sabah görüşəcəyik. Mən bununla razıyam.
B1|An deiner Stelle würde ich …|If I were you, I would …|Sənin yerində olsaydım, …|An deiner Stelle würde ich nachfragen.|If I were you, I would ask for clarification.|Sənin yerində olsaydım, dəqiqləşdirmək üçün soruşardım.
B1|Es fällt mir schwer, … zu …|I find it difficult to …|… etmək mənə çətin gəlir.|Es fällt mir schwer, früh aufzustehen.|I find it difficult to get up early.|Tez oyanmaq mənə çətin gəlir.
B1|Ich kümmere mich darum.|I will take care of it.|Mən bununla məşğul olacağam.|Die Anmeldung fehlt noch. Ich kümmere mich darum.|The registration is still missing. I will take care of it.|Qeydiyyat hələ tamamlanmayıb. Mən bununla məşğul olacağam.
B2|Ich gehe davon aus, dass …|I assume that …|Belə güman edirəm ki, …|Ich gehe davon aus, dass der Termin stattfindet.|I assume that the appointment will go ahead.|Belə güman edirəm ki, görüş baş tutacaq.
B2|Einerseits …, andererseits …|On the one hand …, on the other hand …|Bir tərəfdən …, digər tərəfdən …|Einerseits ist die Wohnung teuer, andererseits liegt sie zentral.|On the one hand, the apartment is expensive; on the other, it is centrally located.|Bir tərəfdən mənzil bahadır, digər tərəfdən isə mərkəzdə yerləşir.
B2|Das hängt davon ab, ob …|That depends on whether …|Bu, … olub-olmamasından asılıdır.|Das hängt davon ab, ob wir genug Zeit haben.|That depends on whether we have enough time.|Bu, kifayət qədər vaxtımızın olub-olmamasından asılıdır.
B2|Soweit ich weiß, …|As far as I know …|Bildiyimə görə, …|Soweit ich weiß, beginnt der Kurs im Oktober.|As far as I know, the course starts in October.|Bildiyimə görə, kurs oktyabrda başlayır.
B2|Ich würde vorschlagen, dass …|I would suggest that …|Təklif edərdim ki, …|Ich würde vorschlagen, dass wir früher anfangen.|I would suggest that we start earlier.|Təklif edərdim ki, daha tez başlayaq.
B2|Das kommt für mich nicht infrage.|That is not an option for me.|Bu variant mənim üçün uyğun deyil.|Ein Umzug kommt für mich nicht infrage.|Moving is not an option for me.|Köçmək mənim üçün uyğun variant deyil.
C1|Es lässt sich nicht bestreiten, dass …|It cannot be denied that …|İnkar etmək olmaz ki, …|Es lässt sich nicht bestreiten, dass Übung wichtig ist.|It cannot be denied that practice is important.|İnkar etmək olmaz ki, məşq vacibdir.
C1|Vor diesem Hintergrund …|Against this background …|Bunu nəzərə alaraq, …|Vor diesem Hintergrund sollten wir den Plan überarbeiten.|Against this background, we should revise the plan.|Bunu nəzərə alaraq, planı yenidən işləməliyik.
C1|In Anbetracht …|In view of …|… nəzərə alaraq, …|In Anbetracht der Kosten wählen wir eine andere Lösung.|In view of the costs, we are choosing another solution.|Xərcləri nəzərə alaraq, başqa bir həll seçirik.
C1|Es gilt zu berücksichtigen, dass …|It is necessary to take into account that …|Nəzərə almaq lazımdır ki, …|Es gilt zu berücksichtigen, dass nicht alle gleich viel Zeit haben.|It is necessary to consider that not everyone has the same amount of time.|Nəzərə almaq lazımdır ki, hamının eyni qədər vaxtı yoxdur.
C1|Daraus lässt sich schließen, dass …|It can be concluded from this that …|Buradan belə nəticə çıxarmaq olar ki, …|Daraus lässt sich schließen, dass die Methode funktioniert.|It can be concluded from this that the method works.|Buradan belə nəticə çıxarmaq olar ki, üsul işləyir.
C1|Dies wirft die Frage auf, ob …|This raises the question of whether …|Bu, … olub-olmaması sualını doğurur.|Dies wirft die Frage auf, ob wir mehr Zeit brauchen.|This raises the question of whether we need more time.|Bu, daha çox vaxta ehtiyacımızın olub-olmaması sualını doğurur.
`.trim().split('\n').map((row,i)=>{
  const [level,de,en,az,exampleDe,exampleEn,exampleAz]=row.split('|');
  return {id:'phrase-'+(i+1),level,de,en,az,examples:[{de:exampleDe,en:exampleEn,az:exampleAz}]};
});
