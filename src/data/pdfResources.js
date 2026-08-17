// ============================================================
// PDF RESOURCE CATALOG
// ============================================================
// This is the file you edit to add a new PDF to the Learning Hub.
//
// HOW TO ADD A NEW PDF (3 steps):
//   1. Drop your PDF file into:  public/pdfs/your-file-name.pdf
//   2. Add a new entry to the PDF_RESOURCES array below.
//   3. Save. Vite hot-reloads automatically in dev; in a production
//      build, the file in public/pdfs/ is copied as-is to the final
//      output, so no extra build step is needed.
//
// Field reference:
//   id          — unique string, no spaces (used as the React key)
//   title       — shown as the card heading
//   description — 1-2 sentence summary shown on the card
//   file        — path relative to /public, always starts with "/pdfs/"
//   topic       — used to group/filter cards (see TOPICS below —
//                 add a new topic there too if you introduce one)
//   tags        — array of short strings shown as pills on the card
//   pages       — optional page count, shown as metadata (cosmetic only)
//   dateAdded   — "YYYY-MM-DD", used for the "Newest" sort order
// ============================================================

export const TOPICS = [
  { id: 'all', label: 'All Resources' },
  { id: 'integration', label: 'Integration' },
  { id: 'series', label: 'Series & Sequences' },
  { id: 'exam-prep', label: 'Exam Prep' },
  { id: 'analysis', label: 'Real Analysis' },
];

export const PDF_RESOURCES = [
  {
    id: 'integration-slides-batch2',
    title: 'Integration Techniques — Slide Deck (Batch 2)',
    description:
      'Swipe-card style MCQ slides covering integration by parts, partial fractions, and u-substitution, each with a full step-by-step solution.',
    file: '/pdfs/integration-slides-batch2.pdf',
    topic: 'integration',
    tags: ['Integration by Parts', 'Partial Fractions', 'U-Substitution', 'LIATE'],
    pages: 20,
    dateAdded: '2026-08-15',
  },
  {
    id: 'topic-1-series',
    title: 'Topic 1: Series & p-Series',
    description:
      'Full topic booklet on series and limits of a series, p-series convergence and divergence, with diagnostic questions up front.',
    file: '/pdfs/topic-1-series.pdf',
    topic: 'series',
    tags: ['Convergence', 'Divergence', 'p-Series', 'Partial Sums'],
    pages: 7,
    dateAdded: '2026-07-20',
  },
  {
    id: 'midsem-recap',
    title: 'Midsem Recap — Reconstructed Questions',
    description:
      'Eight reconstructed midsem-style questions with full solutions and "What This Tests" boxes, plus the reconstructed final exam format.',
    file: '/pdfs/midsem-recap.pdf',
    topic: 'exam-prep',
    tags: ["L'Hopital", 'Sequences', 'Piecewise Functions', 'BWT'],
    pages: 11,
    dateAdded: '2026-08-15',
  },
  {
     id: 'topic-2-limits',
    title: 'Topic 2: Limits',
    description: 'Short description of what this booklet covers.',
    file: '/pdfs/topic-2-limits.pdf',
    topic: 'analysis',
     tags: ['Limits', 'Continuity'],
     pages: 8,
     dateAdded: '2026-08-20',
   },
     {
     id: 'topic-2-limits-answer-key',
    title: 'Topic 2: Limits - Answer Key',
    description: 'Answer key for the Topic 2: Limits booklet.',
    file: '/pdfs/topic-2-limits-answer-key.pdf',
    topic: 'analysis',
     tags: ['Limits', 'Continuity'],
     pages: 8,
     dateAdded: '2026-08-20',
   },
     {
     id: 'topic-3-derivatives',
    title: 'Topic 3: Derivatives',
    description: 'Short description of what this booklet covers.',
    file: '/pdfs/topic-3-derivatives.pdf',
    topic: 'analysis',
     tags: ['Derivatives', 'Differentiation'],
     pages: 8,
     dateAdded: '2026-08-20',
   },
     {
     id: 'topic-3-derivatives-answer-key',
    title: 'Topic 3: Derivatives - Answer Key',
    description: 'Answer key for the Topic 3: Derivatives booklet.',
    file: '/pdfs/topic-3-derivatives-answer-key.pdf',
    topic: 'analysis',
     tags: ['Derivatives', 'Differentiation'],
     pages: 8,
     dateAdded: '2026-08-20',
   },
     {
     id: 'topic-2-limits-answer-key',
    title: 'Topic 2: Limits - Answer Key',
    description: 'Answer key for the Topic 2: Limits booklet.',
    file: '/pdfs/topic-2-limits-answer-key.pdf',
    topic: 'analysis',
     tags: ['Limits', 'Continuity', 'Answer Key', 'Solutions'],
     pages: 8,
     dateAdded: '2026-08-20',
   },
   

  // ---- Add your next PDF below this line, following the same shape ----
  // {
  //   id: 'topic-2-limits',
  //   title: 'Topic 2: Limits',
  //   description: 'Short description of what this booklet covers.',
  //   file: '/pdfs/topic-2-limits.pdf',
  //   topic: 'analysis',
  //   tags: ['Limits', 'Continuity'],
  //   pages: 8,
  //   dateAdded: '2026-08-20',
  // },
];
