# Calculus With Asante — Hub

A React + Vite PWA that pulls together the quiz drill, mock exam, topic booklets,
and concept glossary into one site.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build the production version (what you'd actually deploy):

```bash
npm run build
npm run preview   # serves the built dist/ folder locally so you can check it
```

The build output lands in `dist/` — that folder is what you upload to any static
host (Vercel, Netlify, GitHub Pages, etc.) when you're ready.

---

## Project shape

```
public/
  pdfs/        ← your PDF topic booklets live here
  images/      ← images for the "Image Questions" section
  tools/       ← the standalone quiz.html and exam-prep.html tools
  icons/       ← PWA app icons
src/
  data/        ← the config files you edit to add content (see below)
  pages/       ← one file per tab (Home, Quiz, ExamPrep, LearningHub, Concepts)
  components/  ← shared pieces (nav layout, iframe wrapper, math renderer)
```

---

## How to add a new PDF booklet (do this yourself, no code changes needed)

**Step 1 — Drop the file in.**
Put your PDF into `public/pdfs/`. Name it something URL-safe (lowercase, hyphens,
no spaces) — e.g. `topic-2-limits.pdf`.

**Step 2 — Add one entry to the catalog.**
Open `src/data/pdfResources.js`. At the bottom of the `PDF_RESOURCES` array,
add a block shaped like the ones already there:

```js
{
  id: 'topic-2-limits',
  title: 'Topic 2: Limits',
  description: 'One or two sentences describing what this booklet covers.',
  file: '/pdfs/topic-2-limits.pdf',   // must match the filename from Step 1
  topic: 'analysis',                   // pick from the TOPICS list at the top of the file
  tags: ['Limits', 'Continuity', 'Squeeze Theorem'],
  pages: 8,
  dateAdded: '2026-08-20',
}
```

**Step 3 — Save.**
If `npm run dev` is running, the new card appears immediately (hot reload). If
you're working on a production build, just run `npm run build` again.

That's the whole process — no rebuild scripts, no manifest to regenerate, no
database. The PDF sits in `public/pdfs/`, Vite copies everything in `public/`
into the final build as-is, and the JS file is just a plain array that the
Learning Hub page reads to render cards.

### Adding a new topic category
If your PDF doesn't fit any existing topic (`integration`, `series`, `exam-prep`,
`analysis`), add a new one to the `TOPICS` array at the top of the same file
first:

```js
export const TOPICS = [
  { id: 'all', label: 'All Resources' },
  { id: 'integration', label: 'Integration' },
  { id: 'series', label: 'Series & Sequences' },
  { id: 'exam-prep', label: 'Exam Prep' },
  { id: 'analysis', label: 'Real Analysis' },
  { id: 'your-new-topic', label: 'Your New Topic' },  // add here
];
```

Then use `topic: 'your-new-topic'` in your PDF entry.

---

## How to add a video

Open `src/data/videoResources.js` and add an entry to `VIDEO_RESOURCES`:

```js
{
  id: 'liate-explained',
  title: 'LIATE Rule for Integration by Parts, Explained',
  topic: 'integration',
  url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  creator: 'Professor Leonard',
}
```

Paste any standard YouTube URL (either the `youtube.com/watch?v=...` or the
short `youtu.be/...` form) — it's converted to an embeddable player automatically.

---

## How to add an image question

Put the image in `public/images/`, then add an entry to
`src/data/imageQuestions.js`:

```js
{
  id: 'diagram-q1',
  title: 'Related Rates — Ladder Sliding Down a Wall',
  topic: 'analysis',
  image: '/images/ladder-problem.png',
  answer: 'dx/dt = -3/4 ft/s at the moment x = 6ft',
}
```

The `answer` field is optional — it's shown behind a "Show answer" button.

---

## Updating the quiz or exam-prep tool itself

Those two tabs just embed the standalone HTML files sitting in `public/tools/`.
If you regenerate an updated version of either tool later, replace the file at
`public/tools/quiz.html` or `public/tools/exam-prep.html` — same filename,
just overwrite it. The React app doesn't need to change at all.

---

## Notes on the PWA behavior

- The service worker caches the app shell, the two tool HTML files, and any
  PDF once it's been opened, so the hub keeps working offline after a first
  visit.
- Icons are in `public/icons/` — replace `icon-192.png` and `icon-512.png`
  with your own artwork at any time; same filenames, same sizes.
- `vite.config.js` is where the PWA manifest (name, colors, icons) lives if
  you want to change the app's display name or theme color later.
