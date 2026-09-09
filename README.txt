Deutsch250 — version 15

WHAT IS NEW IN VERSION 15
- German voice selector with voice preview, using the voices available on the device.
- Slow 0.75x, Normal 1x and Fast 1.25x settings apply to all pronunciation and story audio.
- Voice and speed preferences are saved in this browser.
- Changes during a story repeat the current sentence.
- Natural-sounding output depends on the installed/browser voices; recorded narration is not included.
- Checked voice filtering, selection, playback configuration, story restart and saved preferences with a simulated speech engine. Real-device listening was not performed.

VERSION 14 FEATURES
- Ten original A2-B1 stories, each 150-165 words, with three comprehension questions.
- Tap any word in the story text for Azerbaijani/English translation.
- The popup shows the dictionary form, noun plural and irregular verb forms where relevant.
- The popup prefers a position above the word and moves below if there is insufficient room. Close it with its close button, Escape, or a tap outside.
- Add words to the existing review queue; previously saved word progress is preserved.
- Sentence-by-sentence story audio and a stop button use browser speech synthesis.
- Fixed the English label “1 day”.

VERSION 13 FEATURES
- Two German example sentences for each of the 250 words, translated into Azerbaijani and English. Related words sometimes share contextual examples.
- A Review today section with hidden answers and Again / Hard / Good / Easy ratings.
- 30 practical phrases, six per level from A1 to C1, with translations, an example and an Add to review button. Levels are approximate teaching guides.
- Pronunciation buttons use the browser's German text-to-speech voice; availability depends on the device.
- The existing vocabulary, themes, search, quiz and learning marks are preserved.

UPDATE YOUR EXISTING SITE
1. Extract this ZIP.
2. Open your jabrail248/deustchsprache repository on GitHub.
3. Choose Add file > Upload files.
4. Upload all eleven files from this folder into the repository root, replacing existing files with the same names. Do not upload only the ZIP or put the files inside an extra folder.
5. Commit the changes. Your existing GitHub Pages configuration will publish them.
6. Refresh the website. If you see the previous version, press Ctrl+F5.

Files: index.html, styles.css, app.js, examples.js, phrases.js, review.js, features.js, stories-data.js, stories.js, audio.js, README.txt.
No API key, paid AI service, build step or new package is required.

REVIEW BEHAVIOUR
- A session includes all due cards at the selected level plus up to ten new cards.
- Existing Learning and Mastered words enter the review queue without losing their marks.
- Again: revisit after 10 minutes.
- Hard: at least 1 day; later intervals grow by roughly 1.2 times.
- Good: 1 day, then 3 days, then roughly double the previous interval.
- Easy: at least 4 days; later intervals grow by roughly 3 times.
- Intervals are capped at 365 days. Each day is 24 hours after the review.
- A card rated Again becomes Learning. Successful reviews with an interval of at least 7 days mark a word Mastered.
- Phrases have their own review schedules and do not change the 250-word dashboard totals.
- Switching languages preserves the current review card and whether its answer is visible.
- The reset button clears both word learning marks and word/phrase review schedules after confirmation.

PROGRESS STORAGE
Progress is saved only in this browser on this website address. Keep the same GitHub Pages address to retain existing progress. Clearing browser data removes it. A ZIP opened locally or another device will not share that progress. A notice is shown if saving is blocked. No accounts or cloud synchronization are included.

VALIDATION
Checked JavaScript syntax, all 250 example mappings and translations, all 30 phrase records, local asset references, scheduler intervals, saved-progress migration/reload, blocked/corrupt storage, review and enrollment click handlers, AZ/EN switching, quiz rescore prevention and reset. HTML interaction checks used a DOM environment. Additional v14 checks cover every story token, dictionary coverage, text reconstruction, noun/verb distinctions, separable verb forms, story lengths, question counts, application startup and saved story vocabulary. Popup positioning and visual layout have not been tested in a real browser. Live deployment was not performed.
