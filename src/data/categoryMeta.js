// Category metadata for the Concepts glossary — labels match the
// question bank categories used elsewhere in the hub, colors are
// muted to fit the premium design system rather than the quiz tool's
// brighter palette.

export const CATEGORY_META = {
  'trig-deriv': { label: 'Trig — Derivatives', group: 'Derivatives' },
  'invtrig-deriv': { label: 'Inverse Trig — Derivatives', group: 'Derivatives' },
  'hyp-deriv': { label: 'Hyperbolic — Derivatives', group: 'Derivatives' },
  'invhyp-deriv': { label: 'Inverse Hyperbolic — Derivatives', group: 'Derivatives' },
  'more-derivatives': { label: 'Derivatives — Mixed Techniques', group: 'Derivatives' },
  'implicit-diff': { label: 'Implicit Differentiation', group: 'Derivatives' },

  'trig-int': { label: 'Trig — Integrals', group: 'Integrals' },
  'invtrig-int': { label: 'Inverse Trig — Integrals', group: 'Integrals' },
  'hyp-int': { label: 'Hyperbolic — Integrals', group: 'Integrals' },
  'invhyp-int': { label: 'Inverse Hyperbolic — Integrals', group: 'Integrals' },
  'more-integrals': { label: 'Integrals — Partial Fractions & Mixed', group: 'Integrals' },

  'mvt-ivt': { label: "MVT, IVT & Rolle's", group: 'Core Theorems' },
  lhopital: { label: "L'Hopital's Rule", group: 'Core Theorems' },

  analysis: { label: 'Real Analysis — Sets & Sequences', group: 'Real Analysis' },
};

export const GROUP_ORDER = ['Derivatives', 'Integrals', 'Core Theorems', 'Real Analysis'];
