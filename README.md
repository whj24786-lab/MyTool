# Which AI Tool Is Right for You? — Bilingual Assessment App

A single-file, static, client-side web app: a 14-question quiz that recommends
an AI-tool category (Research, Writing, Coding, Design, or Data & Document
Analysis) based on the user's answers. Fully bilingual (English/Arabic, with
correct LTR/RTL layout switching).

## Running it
No build step, no server, no dependencies. Just open `index.html` in any
modern browser (double-click it, or serve the folder with any static file
server, e.g. `npx serve .`).

## Project structure
- `index.html` — the entire application: HTML, CSS, and JavaScript in one
  file (structure, styling, translations, question bank, scoring logic, and
  rendering all live here).

## Editing the quiz content
- All question and answer text (English + Arabic) lives in the `T` object
  near the top of the `<script>` block, under `T.en.questions` and
  `T.ar.questions`.
- Category names, "why" explanations, suggested skills, and level
  descriptions live in `T.en.categories` / `T.ar.categories` and
  `T.en.levels` / `T.ar.levels`.

## Editing the scoring logic
- The `QUESTIONS` array (just above `T`) defines all 14 questions and their
  answer options. Each option can carry:
  - `scores: { categoryKey: points }` — contributes points toward one or
    more of the five categories (`research`, `writing`, `coding`, `design`,
    `data`).
  - `level: 1 | 2 | 3` — contributes to the estimated experience level
    (beginner / intermediate / advanced), averaged across all
    level-carrying answers.
- `computeResults()` sums these up, picks the highest-scoring category, and
  rounds the average level. Adjust point values directly in `QUESTIONS` to
  retune the recommendation logic — no other code needs to change.

## Data & privacy
- No backend, no database, no authentication, no API keys, no analytics.
- Progress and results are saved only in the browser's `localStorage` on the
  user's device, and are cleared via the "Start Over" button.
- Note: some sandboxed preview environments (like an in-chat AI assistant
  preview) block real `localStorage`. The app detects this and transparently
  falls back to an in-memory store for that session, so it still works —
  when opened as a normal local file or hosted normally, real `localStorage`
  is used and progress persists across reloads.

## Browser support
Vanilla JS (ES5-leaning, no build tooling), works in all modern evergreen
browsers.
