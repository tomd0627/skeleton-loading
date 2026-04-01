import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { PatternSection } from '@/components/pattern-section';
import { BlogCardContent } from '@/components/patterns/blog-card/content';
import { BlogCardSkeleton } from '@/components/patterns/blog-card/skeleton';
import { ChatMessagesContent } from '@/components/patterns/chat-messages/content';
import { ChatMessagesSkeleton } from '@/components/patterns/chat-messages/skeleton';
import { DashboardStatsContent } from '@/components/patterns/dashboard-stats/content';
import { DashboardStatsSkeleton } from '@/components/patterns/dashboard-stats/skeleton';
import { DataTableContent } from '@/components/patterns/data-table/content';
import { DataTableSkeleton } from '@/components/patterns/data-table/skeleton';
import { MediaGalleryContent } from '@/components/patterns/media-gallery/content';
import { MediaGallerySkeleton } from '@/components/patterns/media-gallery/skeleton';
import { ProductGridContent } from '@/components/patterns/product-grid/content';
import { ProductGridSkeleton } from '@/components/patterns/product-grid/skeleton';
import { ProfileBlockContent } from '@/components/patterns/profile-block/content';
import { ProfileBlockSkeleton } from '@/components/patterns/profile-block/skeleton';
import { SettingsFormContent } from '@/components/patterns/settings-form/content';
import { SettingsFormSkeleton } from '@/components/patterns/settings-form/skeleton';
import { SidebarNavContent } from '@/components/patterns/sidebar-nav/content';
import { SidebarNavSkeleton } from '@/components/patterns/sidebar-nav/skeleton';
import { SocialFeedContent } from '@/components/patterns/social-feed/content';
import { SocialFeedSkeleton } from '@/components/patterns/social-feed/skeleton';
import {
  mockBlogPost,
  mockGalleryItems,
  mockKpis,
  mockMessages,
  mockNavItems,
  mockProducts,
  mockProfile,
  mockProjectRows,
  mockSettings,
  mockSocialPosts,
} from '@/lib/mock-data';
import { patternsMeta } from '@/lib/patterns-meta';
import type { PatternSlug } from '@/types';

const patternComponents = {
  'blog-card': {
    skeleton: <BlogCardSkeleton />,
    content: <BlogCardContent post={mockBlogPost} />,
  },
  'social-feed': {
    skeleton: <SocialFeedSkeleton />,
    content: <SocialFeedContent posts={mockSocialPosts} />,
  },
  'profile-block': {
    skeleton: <ProfileBlockSkeleton />,
    content: <ProfileBlockContent profile={mockProfile} />,
  },
  'data-table': {
    skeleton: <DataTableSkeleton />,
    content: <DataTableContent rows={mockProjectRows} />,
  },
  'product-grid': {
    skeleton: <ProductGridSkeleton />,
    content: <ProductGridContent products={mockProducts} />,
  },
  'dashboard-stats': {
    skeleton: <DashboardStatsSkeleton />,
    content: <DashboardStatsContent kpis={mockKpis} />,
  },
  'media-gallery': {
    skeleton: <MediaGallerySkeleton />,
    content: <MediaGalleryContent items={mockGalleryItems} />,
  },
  'chat-messages': {
    skeleton: <ChatMessagesSkeleton />,
    content: <ChatMessagesContent messages={mockMessages} />,
  },
  'settings-form': {
    skeleton: <SettingsFormSkeleton />,
    content: <SettingsFormContent settings={mockSettings} />,
  },
  'sidebar-nav': {
    skeleton: <SidebarNavSkeleton />,
    content: <SidebarNavContent nav={mockNavItems} />,
  },
} satisfies Record<PatternSlug, { skeleton: React.ReactNode; content: React.ReactNode }>;

export default function HomePage() {
  return (
    <>
      <Hero />
      {patternsMeta.map((pattern) => {
        const { skeleton, content } = patternComponents[pattern.slug];
        return (
          <PatternSection
            key={pattern.slug}
            name={pattern.name}
            slug={pattern.slug}
            rationale={pattern.rationale}
            skeleton={skeleton}
            content={content}
          />
        );
      })}
      <Footer />
    </>
  );
}
