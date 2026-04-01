import { SkeletonLine } from '@/components/ui/skeleton-line';

function FeedItemSkeleton() {
  return (
    <div className="flex gap-3 py-4">
      <div className="shimmer h-10 w-10 shrink-0 rounded-full" aria-hidden="true" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex gap-2">
          <SkeletonLine width="w-24" height="h-4" />
          <SkeletonLine width="w-16" height="h-4" />
        </div>
        <SkeletonLine width="w-full" height="h-4" />
        <SkeletonLine width="w-4/5" height="h-4" />
        <div className="mt-1 flex gap-6">
          <SkeletonLine width="w-8" height="h-4" />
          <SkeletonLine width="w-8" height="h-4" />
          <SkeletonLine width="w-8" height="h-4" />
        </div>
      </div>
    </div>
  );
}

export function SocialFeedSkeleton() {
  return (
    <div className="divide-y divide-border">
      <FeedItemSkeleton />
      <FeedItemSkeleton />
      <FeedItemSkeleton />
    </div>
  );
}
