```markdown
# Calculus With Asante (CWAsante) — Hub 🧮

A dedicated peer-learning web platform designed to streamline MATH 152 preparation for engineering cohorts at KNUST. This React + Vite PWA pulls together quiz drills, mock exams, topic booklets, and a concept glossary into one unified, offline-capable site.

## 🚀 Overview
Calculus With Asante bridges the gap between complex mathematical concepts and accessible, structured peer review. It centralizes custom study materials and works in tandem with active WhatsApp study groups to foster a highly collaborative learning environment. 

## ✨ Features
* **Topic Booklets & Glossaries:** Direct access to curated MATH 152 PDF notes and concept breakdowns.
* **Interactive Drills & Exams:** Integrated quiz tools and mock exams for active recall.
* **Multimedia Learning:** Embedded video explanations for complex topics.
* **PWA & Offline Support:** Service workers cache the app shell, HTML tools, and PDFs after the first visit, so the hub keeps working even without an internet connection.

## 💻 Tech Stack
* **Frontend:** React, Vite
* **Architecture:** Progressive Web App (PWA)
* **Hosting/Deployment:** Static hosting (Vercel, Netlify, or GitHub Pages)

---

## 🛠️ Running it Locally

To clone and run this platform on your local machine:

1. **Install dependencies:**
   ```bash
   npm install

```

2. **Start the development server:**
```bash
npm run dev

```


Then open the URL it prints (usually `http://localhost:5173`).
3. **Build for production:**
```bash
npm run build
npm run preview   # serves the built dist/ folder locally so you can check it

```


*The build output lands in the `dist/` folder. This is the folder you upload to your hosting provider.*

---

## 📂 Project Shape

```text
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

## 📝 Content Management (No Code Changes Needed)

You can update the platform's content by simply dropping files into the `public/` folder and updating plain JavaScript arrays in the `src/data/` folder.

### 1. How to add a new PDF booklet

**Step 1 — Drop the file in.**
Put your PDF into `public/pdfs/`. Name it something URL-safe (lowercase, hyphens, no spaces) — e.g., `topic-2-limits.pdf`.

**Step 2 — Add one entry to the catalog.**
Open `src/data/pdfResources.js`. At the bottom of the `PDF_RESOURCES` array, add a block shaped like the ones already there:

```js
{
  id: 'topic-2-limits',
  title: 'Topic 2: Limits',
  description: 'One or two sentences describing what this booklet covers.',
  file: '/pdfs/topic-2-limits.pdf',   // must match the filename from Step 1
  topic: 'analysis',                  // pick from the TOPICS list at the top of the file
  tags: ['Limits', 'Continuity', 'Squeeze Theorem'],
  pages: 8,
  dateAdded: '2026-08-20',
}

```

**Step 3 — Save.**
If `npm run dev` is running, the new card appears immediately (hot reload). For production, just run `npm run build` again.

*(Note: If your PDF doesn't fit any existing topic, add a new category to the `TOPICS` array at the top of the `pdfResources.js` file first).*

### 2. How to add a video

Open `src/data/videoResources.js` and add an entry to `VIDEO_RESOURCES`:

```js
{
  id: 'liate-explained',
  title: 'LIATE Rule for Integration by Parts, Explained',
  topic: 'integration',
  url: '[https://www.youtube.com/watch?v=XXXXXXXXXXX](https://www.youtube.com/watch?v=XXXXXXXXXXX)',
  creator: 'Professor Leonard',
}

```

Paste any standard YouTube URL; it converts to an embeddable player automatically.

### 3. How to add an image question

Put the image in `public/images/`, then add an entry to `src/data/imageQuestions.js`:

```js
{
  id: 'diagram-q1',
  title: 'Related Rates — Ladder Sliding Down a Wall',
  topic: 'analysis',
  image: '/images/ladder-problem.png',
  answer: 'dx/dt = -3/4 ft/s at the moment x = 6ft',
}

```

*The `answer` field is optional and is shown behind a "Show answer" button.*

### 4. Updating the Quiz or Exam-Prep Tools

The Quiz and Exam-Prep tabs embed standalone HTML files sitting in `public/tools/`. To update them, simply replace `public/tools/quiz.html` or `public/tools/exam-prep.html` with the new version. The React app automatically serves the updated files.

---

## 📱 Notes on PWA Behavior

* **Offline Access:** The service worker caches the app shell, tool HTML files, and any opened PDF.
* **App Icons:** To change the app's icons, replace `icon-192.png` and `icon-512.png` inside `public/icons/` with your own artwork (keep the same filenames and dimensions).
* **Manifest:** Theme colors and the display name can be edited in the PWA manifest located inside `vite.config.js`.

---

## 🤝 Contributing

Contributions from fellow KNUST students are highly encouraged! Whether you are adding new calculus problems to the data arrays, uploading refined PDF notes, or optimizing the web interface, your input helps the whole cohort.

**To contribute:**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewMathNotes`)
3. Commit your Changes (`git commit -m 'Add Week 4 Integration practice problems'`)
4. Push to the Branch (`git push origin feature/NewMathNotes`)
5. Open a Pull Request

## 🎓 Administration & Credits

Developed and maintained by Asante Kwaku Okyere. Peer review sessions and voice-note concept explanations are co-administered alongside John.

```

### Suggestions for your repository:
* If you have a live Vercel link for this Vite version, you can add it to the very top (e.g., `Accessible live at [cwasante.vercel.app](https://cwasante.vercel.app)`).
* Since this is a Vite app, deploying it just requires pointing Vercel to the `dist` folder. If contributors ask how it's hosted, it's virtually maintenance-free!

1. Should I add a specific "Deployment to Vercel" step-by-step section to the README?
2. Do you want to include placeholder links for UI screenshots in this version as well?

```
