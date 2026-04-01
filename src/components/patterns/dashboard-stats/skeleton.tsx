import { SkeletonLine } from '@/components/ui/skeleton-line';

function StatCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-skeleton-base p-4">
      <div className="mb-3 flex items-start justify-between">
        <div className="shimmer h-8 w-8 rounded-lg" aria-hidden="true" />
        <SkeletonLine width="w-16" height="h-5" className="rounded-full" />
      </div>
      <SkeletonLine width="w-28" height="h-8" />
      <SkeletonLine width="w-20" height="h-3" className="mt-1" />
      <div className="mt-4 h-10 w-full">
        <SkeletonLine width="w-full" height="h-full" className="rounded" />
      </div>
    </div>
  );
}

export function DashboardStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
    </div>
  );
}
