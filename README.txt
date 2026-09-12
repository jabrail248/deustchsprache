Sprachoo — version 19

UPLOAD THIS VERSION
1. Extract Sprachoo-v19.zip.
2. Open jabrail248/deustchsprache, branch main.
3. Upload ALL 23 files from the extracted folder directly into the repository root, replacing matching files. Do not upload the ZIP itself or create a subfolder.
4. Commit the upload. Wait until the Pages deployment in GitHub Actions succeeds.
5. Open the website in a private window or refresh with Ctrl+F5.
6. Check for “Sprachoo · v19” in the footer. The sidebar should contain expandable Vocabulary and My Vocabulary, with no Progress page.

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
- Two video activities and two audio-only listening activities per level.
- Video embeds request a five-minute excerpt via start/end parameters. The full A1 film has been replaced with an individual Nicos Weg episode. Some other source videos are longer; their original YouTube timeline can still display the full duration. These are bounded embeds, not newly edited/rehosted short video files.
- A Replay selected clip button restarts the selected video. A source link opens YouTube in the visitor's browser. The website cannot route video through Brave or guarantee ad-free playback.
- Listening now uses actual provider-hosted audio recordings in HTML audio players. No YouTube player appears in Listening. Goethe's short audio files sometimes use MP4 containers; the selected files are the provider's listening tracks, not sign-language or lip-reading videos.
- Native audio pauses at the excerpt end and clamps seeking to the selected interval. Slow/Normal/Fast applies to this audio as well as browser speech. Small recordings end naturally before five minutes. C1 uses two consecutive five-minute excerpts from the official recording.
- Sixteen brief original comprehension questions for the eight A1–B2 listening activities were checked against the provider's published transcripts. Full transcripts were not copied. Links to official exercises/answers remain available.
- C1 currently links to official exercises rather than claiming timestamp-verified inline comprehension scoring. Exact C1 excerpt/content alignment and live external playback still need checking.
- Video questions remain explicitly labelled original topic-language practice. Transcript-verified video comprehension tests remain outstanding.
- All provider media remains on its original host. No recordings were extracted from YouTube or downloaded/rehosted. Full source details are in SOURCES.txt.

SAVED WORDS AND ACCOUNTS
- My Vocabulary now contains an Add a word search box: search across all levels in German, English or Azerbaijani, and choose + Add. Saved results immediately show a checkmark. The list supports notes, removal and practice.
- Fixed the old search/filter callbacks that could render vocabulary cards without Save buttons.
- Local saved words survive reloads in the same browser/site. Blocked storage shows an honest message rather than silently pretending persistence.
- Existing deutsch250 review/history keys remain intact. Clearing browser data removes local data.
- Account sign-up, sign-in, email confirmation, password reset and sign-out are implemented using optional Supabase Auth. Guest and account word lists are separate. Manual per-account vocabulary backup/restore and explicit guest-list import are included.
- ACCOUNTS ARE NOT YET ACTIVATED: account-config.js needs the owner's Supabase project URL and public publishable/anon key, and account-schema.sql must be applied to that project. Follow ACCOUNT-SETUP.txt. Without configuration the account page clearly says accounts are unavailable; guest study/saving continues to work.
- No password or privileged API key is stored in these files. Review history and voice preferences are device-local, not part of the vocabulary backup.

VERIFICATION
Simulated runtime checks passed for the existing vocabulary/story/navigation/review features and for the new Saved-section search and actual Add event, duplicate prevention, persistence after reload, search/filter renderer regression, separate guest/account lists, malformed imports, audio-only rendering at every level, replay/seek/stop limits, and unconfigured-account fallback. Mocked service checks passed for signup confirmation, login, password recovery/reset, backup/restore, sign-out isolation and request errors. JavaScript syntax and static HTML/asset checks passed.
No live authentication project, database policy execution, real-browser visual check or external-player playback check was available. This ZIP does not update the live website until uploaded and deployed.

FILES
The 19 previous files plus account.js, account-config.js, account-schema.sql, ACCOUNT-SETUP.txt = 23 files. Upload all 23 directly into the repository root, replacing matching files.
