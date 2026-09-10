Deustchly — version 17

WHAT CHANGED
- New responsive interface: desktop sidebar, mobile navigation, activity dashboard, cleaner cards and subtle transitions.
- Renamed the visible website to Deustchly, retaining the existing address and browser storage keys.
- Switching vocabulary levels clears the search and status filter and returns to page one.
- Added a Show/Hide vocabulary control. Existing word examples remain individually collapsible.
- Reworked examples for the 1,500 added words with a much wider set of topical contexts, plus individually written examples for family vocabulary and difficult academic terms. Some practice sentence patterns are still reused.
- Revised Azerbaijani word meanings and example translations, including kinship, case endings and academic terminology. This is not a professionally proofread dictionary; CEFR assignments are approximate teaching guides.
- Added 150 phrases (30 per level): 180 phrases total, with English/Azerbaijani translations and contextual examples.
- Added 10 original stories: 2 A2, 2 B1, 3 B2 and 3 C1. There are now 20 stories total. The new stories are 159–184 words each, with three comprehension questions each.
- Added translation dictionary coverage for every new story token, preserving existing story review identities.
- Fixed quiz options mutating the underlying vocabulary record.
- All 1,750 word IDs, old phrase IDs and old story-word review IDs remain stable.
- Voice selection and Slow / Normal / Fast playback are retained.

VOCABULARY TOTALS
A1: 275
A2: 275
B1: 450
B2: 425
C1: 325
Total: 1,750

UPDATE YOUR GITHUB PAGES WEBSITE
1. Extract this ZIP.
2. Open jabrail248/deustchsprache on GitHub, on branch main.
3. Choose Add file > Upload files.
4. Upload ALL FIFTEEN extracted files directly to the repository root, replacing matching filenames. Do not upload only the ZIP or place the files in a subfolder.
5. Commit changes and wait for the Pages deployment to finish.
6. Reload the site using Ctrl+F5.
7. The site should display Deustchly, 1,750 words, 180 phrases and 20 stories.

Files: index.html, styles.css, app.js, examples.js, vocabulary-extra.js, phrases.js, review.js, features.js, stories-data.js, content-extra.js, stories.js, audio.js, workspace.js, workspace.css, README.txt.

PRESERVING PROGRESS
Keep the same website address and browser. Data is stored in this browser only, under the original deutsch250 storage keys. Renaming the visible brand does not change those keys. Do not renumber word or phrase IDs. Clearing browser data clears progress. Another browser or a local copy does not share this saved progress.

VALIDATION
Checked JavaScript syntax, local asset references, runtime startup, activity navigation and hash changes, exact vocabulary/phrase/story totals, unique IDs, all example fields, full story token translation coverage, original vocabulary records, pagination, search, level-switch reset, vocabulary collapse controls, progress/review migration and reload, and blocked/corrupt storage. The checks used a simulated runtime. No real-browser visual check or real-device listening test was performed. The live website has not been deployed by this update.

INTERFACE
Added an original learning workspace with desktop sidebar, mobile navigation, separate activity screens, dashboard shortcuts and live progress summary. Hash links and browser Back/Forward are supported. The supplied reference video informed the sidebar and focused activity layout; Deustchly retains its own visual design and content.
