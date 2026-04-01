import { SkeletonBox } from '@/components/ui/skeleton-box';
import { SkeletonLine } from '@/components/ui/skeleton-line';

export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <SkeletonBox aspectRatio="16/9" className="rounded-none" />
      <div className="flex flex-col gap-3 p-5">
        <SkeletonLine width="w-1/4" height="h-3" />
        <div className="flex flex-col gap-2">
          <SkeletonLine width="w-full" height="h-6" />
          <SkeletonLine width="w-3/4" height="h-6" />
        </div>
        <div className="flex flex-col gap-2">
          <SkeletonLine width="w-full" height="h-4" />
          <SkeletonLine width="w-full" height="h-4" />
          <SkeletonLine width="w-5/6" height="h-4" />
        </div>
        <div className="mt-1 flex items-center gap-3 border-t border-border pt-4">
          <div className="shimmer h-9 w-9 shrink-0 rounded-full" aria-hidden="true" />
          <div className="flex flex-col gap-1.5">
            <SkeletonLine width="w-28" height="h-3" />
            <SkeletonLine width="w-20" height="h-3" />
          </div>
          <div className="ml-auto flex gap-3">
            <SkeletonLine width="w-16" height="h-3" />
            <SkeletonLine width="w-16" height="h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
