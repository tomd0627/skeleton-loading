import type { PatternMeta } from '@/types';

export const patternsMeta: PatternMeta[] = [
  {
    slug: 'blog-card',
    name: 'Blog Post Card',
    rationale:
      'Skeleton screens communicate structure, not just fill space. By rendering distinct regions for the hero image, title, excerpt, and author row, the user\'s brain parses the incoming content type before a single byte of real data arrives. Google\'s UX research found users rate skeleton-loading pages as up to 20% faster than spinner-loading equivalents — even with identical network latency.',
  },
  {
    slug: 'social-feed',
    name: 'Social Feed',
    rationale:
      'Feed interfaces present a specific challenge: variable-length content. Rather than a fixed-height skeleton that shifts layout on reveal, this pattern uses a minimum viable skeleton with min-height constraints to prevent upward reflow. Action button skeletons match icon button dimensions exactly, eliminating the most common source of CLS in social feeds.',
  },
  {
    slug: 'profile-block',
    name: 'Profile Block',
    rationale:
      'Profile pages carry high user intent — someone navigated here specifically. The cost of a blank screen is higher than on a browse page. Staggered line widths (name wider than title, title wider than bio) communicate hierarchy before content loads. The stats grid pre-allocates exact column space, guaranteeing zero layout shift when numbers appear.',
  },
  {
    slug: 'data-table',
    name: 'Data Table',
    rationale:
      'Tables are the hardest content type to skeleton correctly. The visual contract of a table demands equal column widths and equal row heights — violate either and the content reveal feels jarring. This implementation shares column width constants between the skeleton and the real table, ensuring sub-pixel alignment. Varying right-edge clipping on text lines simulates realistic data variability.',
  },
  {
    slug: 'product-grid',
    name: 'Product Grid',
    rationale:
      'E-commerce grids have the highest direct revenue correlation to perceived performance. Amazon\'s internal data showed every 100ms of load time costs 1% of sales. Rendering all skeleton cards simultaneously sets visual expectations for grid density. Product image placeholders use a locked aspect ratio — the most common source of CLS in product grids.',
  },
  {
    slug: 'dashboard-stats',
    name: 'Dashboard Stats',
    rationale:
      'KPI dashboards are viewed by task-focused users who open them on a schedule. Even a 500ms blank screen creates disproportionate anxiety for someone checking metrics. The skeleton renders the complete layout — all four cards with icon, value, label, and sparkline regions — so users can orient spatially before data arrives. Sparkline skeletons are flat lines, avoiding false trend implications.',
  },
  {
    slug: 'media-gallery',
    name: 'Media Gallery',
    rationale:
      'Image-heavy layouts present the starkest perceived performance gap. This masonry skeleton assigns each placeholder the same aspect ratio as its real counterpart, so column heights are identical between skeleton and content states. No relayout occurs on reveal. The varied warm tones on placeholders suggest different images without implying false content.',
  },
  {
    slug: 'chat-messages',
    name: 'Chat Messages',
    rationale:
      'Chat interfaces have a unique skeleton requirement: message alignment communicates authorship. Sent messages align right; received align left. A skeleton that ignores this destroys the mental model built from prior conversation. Skeleton bubbles here mirror alignment and use the same border-radius shorthand as real bubbles — the highest form of skeleton UX, where the placeholder communicates genuine structural information.',
  },
  {
    slug: 'settings-form',
    name: 'Settings Form',
    rationale:
      'Form layouts are the skeleton pattern most likely to cause CLS if done carelessly. Input fields have a fixed height contract — the browser reserves no space for them until they render. Skeleton inputs here use h-10, matching the exact rendered height of real inputs, so the page does not shift a single pixel on reveal. Toggle skeletons use a fixed 44×24px pill, matching the real toggle dimensions, preventing the preference rows from jumping horizontally when content loads.',
  },
  {
    slug: 'sidebar-nav',
    name: 'Sidebar Navigation',
    rationale:
      'Navigation is app chrome, not content — users reach for it immediately on load. A blank sidebar while content populates is uniquely disorienting because it removes the spatial anchor users orient from. This skeleton renders the full structural grammar: logo region, primary nav rows with icon and label columns, a section header, and the account footer. Icon placeholder squares match the 17px icon size exactly, keeping item row heights identical between skeleton and loaded states.',
  },
];
