import type {
  BlogPostData,
  ChatMessage,
  GalleryItem,
  KpiData,
  ProductData,
  ProfileData,
  ProjectRow,
  SocialPostData,
} from '@/types';

export const mockBlogPost: BlogPostData = {
  title: 'The Perceived Performance Illusion: What Your Users Feel vs. What Is Real',
  excerpt:
    'True performance and perceived performance are not the same thing. A page that loads in 400ms but shows a blank screen feels slower than one that loads in 800ms but immediately renders a skeleton. Here is why that gap matters more than your Lighthouse score.',
  author: {
    name: 'Maya Chen',
    role: 'Performance Engineer',
    avatarInitials: 'MC',
  },
  category: 'Web Performance',
  readTime: '6 min read',
  date: 'Mar 14, 2025',
};

export const mockSocialPosts: SocialPostData[] = [
  {
    id: 1,
    author: { handle: '@devcraft', name: 'Dev Craft', avatarInitials: 'DC' },
    content:
      'Just shipped a skeleton screen for our checkout flow. Bounce rate dropped 18% in the first week. Perceived performance is real, folks.',
    timestamp: '2h',
    likes: 47,
    replies: 12,
    reposts: 8,
  },
  {
    id: 2,
    author: { handle: '@uxthoughts', name: 'UX Thoughts', avatarInitials: 'UX' },
    content:
      'Hot take: a well-designed skeleton is better UX than a spinner in almost every loading scenario. The spatial expectations it sets reduce cognitive load significantly.',
    timestamp: '5h',
    likes: 203,
    replies: 38,
    reposts: 64,
  },
  {
    id: 3,
    author: { handle: '@webperf_nerd', name: 'Web Perf Nerd', avatarInitials: 'WP' },
    content:
      'PSA: your skeleton should match your content exact dimensions or you create layout shift anxiety. Users notice the jump even when they cannot articulate why.',
    timestamp: '8h',
    likes: 91,
    replies: 7,
    reposts: 15,
  },
];

export const mockProfile: ProfileData = {
  name: 'Jordan Rivera',
  title: 'Senior Product Designer',
  company: 'Meridian Labs',
  bio: 'Obsessed with the intersection of motion design and usability. I design systems that feel alive without demanding attention.',
  stats: { projects: 142, followers: '12.4k', following: 389 },
  avatarInitials: 'JR',
  tags: ['Motion Design', 'Design Systems', 'Accessibility'],
};

export const mockProjectRows: ProjectRow[] = [
  {
    project: 'Atlas Redesign',
    status: 'In Progress',
    completion: 68,
    budget: '$48,200',
    updated: '2 days ago',
  },
  {
    project: 'Nova API Gateway',
    status: 'Completed',
    completion: 100,
    budget: '$112,500',
    updated: '1 week ago',
  },
  {
    project: 'Meridian Dashboard',
    status: 'Review',
    completion: 89,
    budget: '$31,800',
    updated: 'Yesterday',
  },
  {
    project: 'Pulse Mobile',
    status: 'On Hold',
    completion: 34,
    budget: '$67,000',
    updated: '3 weeks ago',
  },
  {
    project: 'Orbit Analytics',
    status: 'In Progress',
    completion: 51,
    budget: '$94,300',
    updated: '5 hours ago',
  },
];

export const mockProducts: ProductData[] = [
  { id: 1, name: 'Arc Desk Lamp',          price: '$89',  rating: 4.7, reviews: 243,  badge: 'Bestseller', swatch: 1 },
  { id: 2, name: 'Pebble Wireless Charger', price: '$45',  rating: 4.5, reviews: 891,  badge: null,         swatch: 2 },
  { id: 3, name: 'Slate Notebook A5',       price: '$28',  rating: 4.8, reviews: 1204, badge: 'New',        swatch: 3 },
  { id: 4, name: 'Halo Monitor Stand',      price: '$134', rating: 4.6, reviews: 178,  badge: null,         swatch: 4 },
  { id: 5, name: 'Cove Desk Mat',           price: '$67',  rating: 4.9, reviews: 562,  badge: 'Top Rated',  swatch: 1 },
  { id: 6, name: 'Drift Cable Organizer',   price: '$19',  rating: 4.3, reviews: 423,  badge: null,         swatch: 2 },
];

export const mockKpis: KpiData[] = [
  {
    label: 'Monthly Revenue',
    value: '$84,320',
    delta: '+12.4%',
    deltaPositive: true,
    sparkline: [40, 55, 45, 60, 52, 70, 68, 75, 80, 84],
    icon: 'trending-up',
  },
  {
    label: 'Active Users',
    value: '24,891',
    delta: '+8.7%',
    deltaPositive: true,
    sparkline: [200, 220, 210, 240, 230, 260, 245, 270, 280, 290],
    icon: 'users',
  },
  {
    label: 'Avg. Session',
    value: '4m 12s',
    delta: '-0.8%',
    deltaPositive: false,
    sparkline: [5.2, 4.9, 5.1, 4.8, 4.6, 4.9, 4.7, 4.3, 4.2, 4.1],
    icon: 'clock',
  },
  {
    label: 'Conversion Rate',
    value: '3.42%',
    delta: '+0.31%',
    deltaPositive: true,
    sparkline: [2.8, 3.0, 2.9, 3.1, 3.2, 3.0, 3.3, 3.4, 3.3, 3.4],
    icon: 'target',
  },
];

export const mockGalleryItems: GalleryItem[] = [
  { id: 1, label: 'Mountain at Dawn', aspectRatio: '4/3',  swatch: 1 },
  { id: 2, label: 'Urban Geometry',   aspectRatio: '3/4',  swatch: 2 },
  { id: 3, label: 'Still Life No. 4', aspectRatio: '1/1',  swatch: 3 },
  { id: 4, label: 'Fog & Light',      aspectRatio: '16/9', swatch: 4 },
  { id: 5, label: 'Market Morning',   aspectRatio: '3/4',  swatch: 1 },
  { id: 6, label: 'Tidal Abstract',   aspectRatio: '4/3',  swatch: 2 },
  { id: 7, label: 'Glass & Copper',   aspectRatio: '1/1',  swatch: 3 },
  { id: 8, label: 'Late Afternoon',   aspectRatio: '16/9', swatch: 4 },
];

export const mockMessages: ChatMessage[] = [
  { id: 1, sent: false, text: 'Hey! Did you get a chance to look at the loading states PR?', time: '2:14 PM' },
  { id: 2, sent: true, text: 'Just finished reviewing it — the skeleton implementations look great.', time: '2:16 PM' },
  {
    id: 3,
    sent: false,
    text: 'Thanks! I was thinking we should add the reduced-motion fallback too.',
    time: '2:17 PM',
  },
  {
    id: 4,
    sent: true,
    text: 'Already on it. Just added a prefers-reduced-motion block that swaps the shimmer for a static base color.',
    time: '2:18 PM',
  },
  { id: 5, sent: false, text: 'Perfect. What about the aria-busy attributes?', time: '2:19 PM' },
  {
    id: 6,
    sent: true,
    text: 'Added aria-busy="true" on all skeleton containers and aria-live="polite" on the status region. WCAG compliant.',
    time: '2:20 PM',
  },
  { id: 7, sent: false, text: 'This is going in the portfolio for sure.', time: '2:21 PM' },
  { id: 8, sent: true, text: 'That was the plan all along.', time: '2:21 PM' },
];
