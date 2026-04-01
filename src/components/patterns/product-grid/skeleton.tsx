import { SkeletonBox } from '@/components/ui/skeleton-box';
import { SkeletonLine } from '@/components/ui/skeleton-line';

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-skeleton-base">
      <SkeletonBox aspectRatio="4/3" className="rounded-none" />
      <div className="flex flex-col gap-2 p-3">
        <SkeletonLine width="w-3/4" height="h-4" />
        <SkeletonLine width="w-1/3" height="h-4" />
        <SkeletonLine width="w-1/2" height="h-3" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
