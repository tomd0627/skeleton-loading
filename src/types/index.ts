export type PatternSlug =
  | 'blog-card'
  | 'social-feed'
  | 'profile-block'
  | 'data-table'
  | 'product-grid'
  | 'dashboard-stats'
  | 'media-gallery'
  | 'chat-messages'
  | 'settings-form'
  | 'sidebar-nav';

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

export interface SettingsPreference {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
}

export interface SettingsData {
  displayName: string;
  email: string;
  bio: string;
  preferences: SettingsPreference[];
}

export interface NavItem {
  icon: 'layout-dashboard' | 'bar-chart-2' | 'folder' | 'inbox' | 'users' | 'plus' | 'settings' | 'calendar';
  label: string;
  active: boolean;
  badge?: number;
}

export interface NavSection {
  label: string | null;
  items: NavItem[];
}

export interface NavData {
  appName: string;
  sections: NavSection[];
  user: { name: string; role: string; avatarInitials: string };
}
