import { useMemo, useState } from 'react';
import { GLOSSARY } from '../data/glossary.js';
import { CATEGORY_META, GROUP_ORDER } from '../data/categoryMeta.js';
import MathText from '../components/MathText.jsx';
import Reveal from '../components/Reveal.jsx';
import './Concepts.css';

export default function Concepts() {
  const [query, setQuery] = useState('');

  const groupedResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    const groups = {};

    Object.entries(GLOSSARY).forEach(([catId, data]) => {
      const meta = CATEGORY_META[catId];
      if (!meta) return;

      const matchingTerms = data.terms.filter((t) => {
        if (!q) return true;
        return t.name.toLowerCase().includes(q) || t.def.toLowerCase().includes(q);
      });
      if (matchingTerms.length === 0) return;

      if (!groups[meta.group]) groups[meta.group] = [];
      groups[meta.group].push({ catId, label: meta.label, intro: data.intro, terms: matchingTerms });
    });

    return groups;
  }, [query]);

  const hasResults = Object.keys(groupedResults).length > 0;

  return (
    <div className="container concepts-page">
      <Reveal>
        <div className="concepts-header">
          <div className="eyebrow">Glossary</div>
          <h1 className="concepts-title">Concepts</h1>
          <p className="concepts-sub">
            What a term actually means, not just its formula. Bounded sets, Cauchy sequences, LIATE, how
            to approach a by-parts question &mdash; the vocabulary that makes the MCQs click.
          </p>
          <input
            type="text"
            className="concepts-search"
            placeholder='Search terms (e.g. "Cauchy", "infimum", "LIATE")…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Reveal>

      {!hasResults && (
        <div className="concepts-empty">No terms match &ldquo;{query}&rdquo; &mdash; try a different keyword.</div>
      )}

      {GROUP_ORDER.filter((g) => groupedResults[g]).map((groupName) => (
        <section key={groupName} className="concept-group-section">
          <Reveal amount={0.4}>
            <h2 className="concept-group-heading">{groupName}</h2>
          </Reveal>
          {groupedResults[groupName].map((cat) => (
            <div key={cat.catId} className="concept-category">
              <Reveal amount={0.4}>
                <h3 className="concept-category-label">{cat.label}</h3>
                {cat.intro && (
                  <p className="concept-category-intro">
                    <MathText text={cat.intro} />
                  </p>
                )}
              </Reveal>
              <div className="concept-terms">
                {cat.terms.map((term, i) => (
                  <Reveal key={term.name} delay={Math.min(i * 0.05, 0.25)} amount={0.3}>
                    <div className="concept-term-card">
                      <div className="concept-term-name">
                        <MathText text={term.name} />
                      </div>
                      <div className="concept-term-def">
                        <MathText text={term.def} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
