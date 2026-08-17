import { useMemo, useState } from 'react';
import { PDF_RESOURCES, TOPICS } from '../data/pdfResources.js';
import { VIDEO_RESOURCES, toEmbedUrl } from '../data/videoResources.js';
import { IMAGE_QUESTIONS } from '../data/imageQuestions.js';
import Reveal from '../components/Reveal.jsx';
import './LearningHub.css';

const SUBTABS = [
  { id: 'pdfs', label: 'Topic Booklets' },
  { id: 'videos', label: 'Watch & Learn' },
  { id: 'images', label: 'Image Questions' },
];

export default function LearningHub() {
  const [subtab, setSubtab] = useState('pdfs');
  const [topic, setTopic] = useState('all');
  const [query, setQuery] = useState('');
  const [openImageId, setOpenImageId] = useState(null);

  const filteredPdfs = useMemo(() => {
    return PDF_RESOURCES.filter((p) => {
      const topicMatch = topic === 'all' || p.topic === topic;
      const q = query.trim().toLowerCase();
      const queryMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return topicMatch && queryMatch;
    });
  }, [topic, query]);

  const filteredVideos = useMemo(
    () => VIDEO_RESOURCES.filter((v) => topic === 'all' || v.topic === topic),
    [topic]
  );

  const filteredImages = useMemo(
    () => IMAGE_QUESTIONS.filter((i) => topic === 'all' || i.topic === topic),
    [topic]
  );

  return (
    <div className="container learning-hub">
      <Reveal>
        <div className="hub-header">
          <div className="eyebrow">Resources</div>
          <h1 className="hub-title">Learning Hub</h1>
          <p className="hub-sub">
            Topic booklets, worked slide decks, videos, and image questions &mdash; organized so you can go
            straight to whatever you&rsquo;re stuck on.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="hub-subtabs">
          {SUBTABS.map((t) => (
            <button
              key={t.id}
              className={'hub-subtab' + (subtab === t.id ? ' active' : '')}
              onClick={() => setSubtab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="hub-filters">
          <div className="topic-pills">
            {TOPICS.map((t) => (
              <button
                key={t.id}
                className={'topic-pill' + (topic === t.id ? ' active' : '')}
                onClick={() => setTopic(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          {subtab === 'pdfs' && (
            <input
              type="text"
              className="hub-search"
              placeholder="Search booklets&hellip;"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          )}
        </div>
      </Reveal>

      {subtab === 'pdfs' && (
        <div className="pdf-grid">
          {filteredPdfs.length === 0 && (
            <div className="hub-empty">No booklets match that filter yet.</div>
          )}
          {filteredPdfs.map((pdf, i) => (
            <Reveal key={pdf.id} delay={Math.min(i * 0.06, 0.3)} amount={0.2}>
              <a href={pdf.file} target="_blank" rel="noreferrer" className="pdf-card">
                <div className="pdf-card-icon">PDF</div>
                <div className="pdf-card-body">
                  <h3 className="pdf-card-title">{pdf.title}</h3>
                  <p className="pdf-card-desc">{pdf.description}</p>
                  <div className="pdf-card-tags">
                    {pdf.tags.map((tag) => (
                      <span key={tag} className="pdf-tag">{tag}</span>
                    ))}
                  </div>
                  {pdf.pages && <div className="pdf-card-meta">{pdf.pages} pages</div>}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}

      {subtab === 'videos' && (
        <div className="video-grid">
          {filteredVideos.length === 0 && (
            <div className="hub-empty">
              No videos linked yet for this topic. Add entries to{' '}
              <code>src/data/videoResources.js</code> to populate this section.
            </div>
          )}
          {filteredVideos.map((v, i) => (
            <Reveal key={v.id} delay={Math.min(i * 0.06, 0.3)} amount={0.2}>
              <div className="video-card">
                <div className="video-embed-wrap">
                  <iframe
                    src={toEmbedUrl(v.url)}
                    title={v.title}
                    allowFullScreen
                    className="video-embed"
                  />
                </div>
                <div className="video-card-body">
                  <h3 className="video-card-title">{v.title}</h3>
                  {v.creator && <span className="video-card-creator">{v.creator}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {subtab === 'images' && (
        <div className="image-grid">
          {filteredImages.length === 0 && (
            <div className="hub-empty">
              No image questions added yet. Add entries to{' '}
              <code>src/data/imageQuestions.js</code> to populate this section.
            </div>
          )}
          {filteredImages.map((img, i) => (
            <Reveal key={img.id} delay={Math.min(i * 0.06, 0.3)} amount={0.2}>
              <div className="image-card">
                <img src={img.image} alt={img.title} className="image-card-img" />
                <div className="image-card-body">
                  <h3 className="image-card-title">{img.title}</h3>
                  {img.answer && (
                    <button
                      className="image-card-toggle"
                      onClick={() => setOpenImageId(openImageId === img.id ? null : img.id)}
                    >
                      {openImageId === img.id ? 'Hide answer' : 'Show answer'}
                    </button>
                  )}
                  {openImageId === img.id && <div className="image-card-answer">{img.answer}</div>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
