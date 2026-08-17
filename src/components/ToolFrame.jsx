import { useState } from 'react';
import './ToolFrame.css';

export default function ToolFrame({ src, title }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="tool-frame-wrap">
      {!loaded && (
        <div className="tool-frame-loading">
          <div className="tool-frame-spinner" />
          <span>Loading {title}&hellip;</span>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="tool-frame"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
