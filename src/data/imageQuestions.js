// ============================================================
// IMAGE QUESTIONS CATALOG
// ============================================================
// For questions that are easier to show as an image than to
// typeset (e.g. a photographed handwritten solution, a diagram-
// heavy question, or a screenshot from a past paper).
//
// HOW TO ADD ONE:
//   1. Drop the image into: public/images/your-image-name.png
//      (jpg/png/webp all work)
//   2. Add an entry below.
//
// Field reference:
//   id        — unique string
//   title     — shown above the image
//   topic     — must match a topic id from pdfResources.js TOPICS
//   image     — path relative to /public, starts with "/images/"
//   answer    — optional short text revealed on click ("Show answer")
// ============================================================

export const IMAGE_QUESTIONS = [
  {
  id: 'sequences-explained',
  title: 'Sequences — vs. Series',
  topic: 'series',
  image: '/images/Sequences-Explained.png',
  answer: 'The sequence is a list of numbers, while the series is the sum of those numbers. The series converges if the sequence approaches zero fast enough.',
},

  // Example — replace with a real image once you have one:
  // {
  //   id: 'diagram-q1',
  //   title: 'Related Rates — Ladder Sliding Down a Wall',
  //   topic: 'analysis',
  //   image: '/images/ladder-problem.png',
  //   answer: 'dx/dt = -3/4 ft/s at the moment x = 6ft',
  // },
];
