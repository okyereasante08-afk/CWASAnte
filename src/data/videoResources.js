// ============================================================
// VIDEO RESOURCE CATALOG
// ============================================================
// Add a YouTube (or any embeddable) video link per topic here.
// This powers the "Watch & Learn" section of the Learning Hub.
//
// Field reference:
//   id      — unique string
//   title   — shown as the card heading
//   topic   — must match a topic id from pdfResources.js TOPICS list
//   url     — a normal YouTube watch URL or share URL is fine —
//             it's converted to an embeddable URL automatically
//   creator — optional, shown as a small credit line
// ============================================================

export const VIDEO_RESOURCES = [
  // Example — replace with real links once picked:
  // {
  //   id: 'liate-explained',
  //   title: 'LIATE Rule for Integration by Parts, Explained',
  //   topic: 'integration',
  //   url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  //   creator: 'Professor Leonard',
  // },
];

// Converts a standard YouTube URL into an embeddable /embed/ URL.
// Supports youtube.com/watch?v=ID and youtu.be/ID formats.
export function toEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  } catch {
    return url;
  }
}
