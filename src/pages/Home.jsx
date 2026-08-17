import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import './Home.css';

const SECTIONS = [
  {
    to: '/quiz',
    title: 'Quiz',
    desc: '154 practice questions across derivatives, integrals, MVT/IVT, L\u2019Hopital, and real analysis \u2014 with worked solutions and spaced-repetition tracking.',
    tag: 'Practice',
  },
  {
    to: '/exam-prep',
    title: 'Exam Prep',
    desc: 'A 35-question mock exam matching the real end-of-sem format: technique MCQs, fill-in-the-blank theorems, and analysis questions.',
    tag: 'Mock Exam',
  },
  {
    to: '/learning-hub',
    title: 'Learning Hub',
    desc: 'Topic booklets, slide decks, and video resources \u2014 organized by subject so you can go deep on whatever you\u2019re stuck on.',
    tag: 'Resources',
  },
  {
    to: '/concepts',
    title: 'Concepts',
    desc: 'What a term actually means \u2014 bounded sets, Cauchy sequences, LIATE, and the reasoning behind every technique.',
    tag: 'Glossary',
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-inner">
          <Reveal>
            <div className="eyebrow">MATH 152 &middot; Calculus &amp; Analysis &middot; KNUST BME1</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-title">Everything for Calculus,<br />in one place.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-sub">
              Quiz drills, mock exams, topic booklets, and a glossary that actually explains the reasoning
              — not just the formula. Compiled and taught by Asante.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <Link to="/quiz" className="btn btn-primary">Start a quiz drill</Link>
              <Link to="/learning-hub" className="btn btn-ghost">Browse resources</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container sections-grid">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.to} delay={i * 0.08} as="div">
            <Link to={s.to} className="section-card">
              <span className="section-tag">{s.tag}</span>
              <h2 className="section-title">{s.title}</h2>
              <p className="section-desc">{s.desc}</p>
              <span className="section-arrow">&rarr;</span>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
