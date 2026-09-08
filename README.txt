Deutsch250 — version 13

WHAT IS NEW
- Two German example sentences for each of the 250 words, translated into Azerbaijani and English. Related words sometimes share contextual examples.
- A Review today section with hidden answers and Again / Hard / Good / Easy ratings.
- 30 practical phrases, six per level from A1 to C1, with translations, an example and an Add to review button. Levels are approximate teaching guides.
- Pronunciation buttons use the browser's German text-to-speech voice; availability depends on the device.
- The existing vocabulary, themes, search, quiz and learning marks are preserved.

UPDATE YOUR EXISTING SITE
1. Extract this ZIP.
2. Open your jabrail248/deustchsprache repository on GitHub.
3. Choose Add file > Upload files.
4. Upload all eight files from this folder into the repository root, replacing existing files with the same names. Do not upload only the ZIP or put the files inside an extra folder.
5. Commit the changes. Your existing GitHub Pages configuration will publish them.
6. Refresh the website. If you see the previous version, press Ctrl+F5.

Files: index.html, styles.css, app.js, examples.js, phrases.js, review.js, features.js, README.txt.
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
Checked JavaScript syntax, all 250 example mappings and translations, all 30 phrase records, local asset references, scheduler intervals, saved-progress migration/reload, blocked/corrupt storage, review and enrollment click handlers, AZ/EN switching, quiz rescore prevention and reset. HTML interaction checks used a DOM environment. Visual browser testing and live deployment were not performed.
