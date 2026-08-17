import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Splits a string on $...$ delimiters and renders math segments with
// KaTeX, leaving everything else as plain text. Mirrors the auto-render
// behaviour used in the standalone HTML tools, adapted for React.
export default function MathText({ text, as: Component = 'span', className }) {
  if (!text) return null;

  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <Component className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          try {
            return <InlineMath key={i} math={math} />;
          } catch {
            return <span key={i}>{part}</span>;
          }
        }
        return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </Component>
  );
}
