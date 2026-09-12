Sprachoo — version 18

UPLOAD THIS VERSION
1. Extract Sprachoo-v18.zip.
2. Open jabrail248/deustchsprache, branch main.
3. Upload ALL 19 files from the extracted folder directly into the repository root, replacing matching files. Do not upload the ZIP itself or create a subfolder.
4. Commit the upload. Wait until the Pages deployment in GitHub Actions succeeds.
5. Open the website in a private window or refresh with Ctrl+F5.
6. Check for “Sprachoo · v18” in the footer. The sidebar should contain expandable Vocabulary and My Vocabulary, with no Progress page.

INTERFACE
- Sprachoo branding, collapsible sidebar and expandable A1–C1 vocabulary navigation.
- Each level has Words, Stories, Grammar, Chunks, Videos, Listening and Words in use.
- The chosen level carries across its sections. Level changes clear stale vocabulary search/status filters.
- Voice selection is on Home. Slow / Normal / Fast speech controls are also present in every level. These settings control browser speech. YouTube playback speed is controlled in its own player.
- Progress page replaced by My Vocabulary: save words from vocabulary cards and story popups, add notes, remove saved words and practise a saved list of at least four words.
- Old #progress links open My Vocabulary. Existing progress/review storage is retained.

CONTENT
- 1,750 words, with two German examples and English/Azerbaijani translations per word.
- A1 275; A2 275; B1 450; B2 425; C1 325.
- 180 chunks/phrases.
- 22 stories: two short A1 stories added; existing 20 retained.
- 40 more demanding story questions added to the existing stories, with bilingual explanations. Those stories now have five questions each; the two new A1 stories have three each. Answer positions are shuffled.
- 25 introductory grammar lessons: five per level, with explanations and two translated examples each. These are a starting curriculum, not a complete CEFR syllabus.
- 60 manually authored grammar, usage, preposition, irregular-form and reading questions: 12 per level.
- The general assessment selects 30 questions: six per level, including grammar, word usage, irregular forms and reading. It reports a study-level estimate and answer explanations. It is not a validated placement examination and does not test speaking/listening.
- 68 advanced vocabulary entries have revised Azerbaijani meanings and two newly written examples each. Existing examples for the rest of the dictionary are retained, including the previous revision's topic-based examples. Some patterns still recur; this is not a claim that all 3,500 examples received a new individual editorial rewrite in v18. CEFR assignments remain approximate.

MEDIA
- Two videos and two listening activities per level: 20 source links with click-to-load YouTube players.
- Listening activities use the full visible YouTube player; they are not extracted audio files. The original provider's controls and branding remain present.
- Source links were identified through web search. Live embedded playback and transcript contents could not be verified in this environment. Always-visible source links provide a fallback for unavailable embeds.
- Two original topic-language questions accompany each activity. They are explicitly labelled as topic practice, not verified comprehension questions about the clip. A guided summary task is also included. Transcript-verified video comprehension tests remain outstanding.
- No DW/YouTube recordings, captions, news passages or book text have been downloaded or republished. New examples, grammar and questions are original writing. Source details are in SOURCES.txt.

SAVED DATA
Existing deutsch250 browser storage keys remain intact. New sidebar, level, personal vocabulary and lesson preferences use sprachoo keys. Keep the same website address/browser to preserve local data. Clearing browser data removes it; no account or cross-device sync is provided.

VERIFICATION
Passed simulated runtime checks for startup, original word IDs, content totals, two complete examples per word, all vocabulary pages, search, level changes, review scheduling and saved progress reload, blocked/corrupt storage, all 35 level/activity routes, assessment composition and scoring, grammar/media counts, personal-word deduplication/reload, and old progress-link redirection. Static checks confirmed unique HTML IDs, Home voice placement, script syntax and asset references.
No real-browser visual check, external player playback check or native-speaker proofread was performed. This ZIP does not update the live website until uploaded and deployed.

FILES
index.html, styles.css, app.js, examples.js, vocabulary-extra.js, phrases.js, review.js, features.js, stories-data.js, content-extra.js, stories.js, audio.js, workspace.js, workspace.css, course.js, course.css, course-data.js, README.txt, SOURCES.txt.
