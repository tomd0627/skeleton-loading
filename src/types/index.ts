export type PatternSlug =
  | 'blog-card'
  | 'social-feed'
  | 'profile-block'
  | 'data-table'
  | 'product-grid'
  | 'dashboard-stats'
  | 'media-gallery'
  | 'chat-messages';

export interface PatternMeta {
  slug: PatternSlug;
  name: string;
  rationale: string;
}

export interface BlogPostData {
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  category: string;
  readTime: string;
  date: string;
}

export interface SocialPostData {
  id: number;
  author: {
    handle: string;
    name: string;
    avatarInitials: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  reposts: number;
}

export interface ProfileData {
  name: string;
  title: string;
  company: string;
  bio: string;
  stats: {
    projects: number;
    followers: string;
    following: number;
  };
  avatarInitials: string;
  tags: string[];
}

export interface ProjectRow {
  project: string;
  status: 'In Progress' | 'Completed' | 'Review' | 'On Hold';
  completion: number;
  budget: string;
  updated: string;
}

export interface ProductData {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  badge: string | null;
  swatch: 1 | 2 | 3 | 4;
}

export interface KpiData {
  label: string;
  value: string;
  delta: string;
  deltaPositive: boolean;
  sparkline: number[];
  icon: 'trending-up' | 'users' | 'clock' | 'target';
}

export interface GalleryItem {
  id: number;
  label: string;
  aspectRatio: string;
  swatch: 1 | 2 | 3 | 4;
}

export interface ChatMessage {
  id: number;
  sent: boolean;
  text: string;
  time: string;
}
