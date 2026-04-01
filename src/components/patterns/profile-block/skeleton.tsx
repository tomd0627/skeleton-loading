import { SkeletonLine } from '@/components/ui/skeleton-line';

export function ProfileBlockSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="shimmer h-20 w-20 rounded-full" aria-hidden="true" />
      <div className="flex w-full flex-col items-center gap-2">
        <SkeletonLine width="w-40" height="h-6" />
        <SkeletonLine width="w-32" height="h-4" />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <SkeletonLine width="w-full" height="h-4" />
        <SkeletonLine width="w-5/6" height="h-4" />
        <SkeletonLine width="w-4/5" height="h-4" />
      </div>
      <div className="grid w-full grid-cols-3 gap-4 border-t border-b border-border py-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <SkeletonLine width="w-12" height="h-6" />
            <SkeletonLine width="w-16" height="h-3" />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <SkeletonLine width="w-28" height="h-7" className="rounded-full" />
        <SkeletonLine width="w-28" height="h-7" className="rounded-full" />
        <SkeletonLine width="w-28" height="h-7" className="rounded-full" />
      </div>
    </div>
  );
}
