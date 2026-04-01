import { SkeletonLine } from '@/components/ui/skeleton-line';

function NavItemSkeleton({ active = false }: { active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-md px-3 py-2 ${active ? 'bg-skeleton-highlight' : ''}`}>
      <div className="shimmer h-5 w-5 shrink-0 rounded" aria-hidden="true" />
      <SkeletonLine width="w-24" height="h-3.5" />
    </div>
  );
}

export function SidebarNavSkeleton() {
  return (
    <div className="flex w-64 flex-col gap-1 rounded-lg border border-border p-3">
      <div className="mb-2 flex items-center gap-2.5 px-3 py-2">
        <div className="shimmer h-7 w-7 shrink-0 rounded-md" aria-hidden="true" />
        <SkeletonLine width="w-20" height="h-4" />
      </div>

      <NavItemSkeleton active />
      <NavItemSkeleton />
      <NavItemSkeleton />
      <NavItemSkeleton />
      <NavItemSkeleton />

      <div className="my-2 px-3">
        <SkeletonLine width="w-10" height="h-3" />
      </div>

      <NavItemSkeleton />
      <NavItemSkeleton />
      <NavItemSkeleton />

      <div className="mt-auto pt-3">
        <div className="border-t border-border pt-3">
          <div className="flex items-center gap-3 rounded-md px-3 py-2">
            <div className="shimmer h-8 w-8 shrink-0 rounded-full" aria-hidden="true" />
            <div className="flex flex-col gap-1.5">
              <SkeletonLine width="w-24" height="h-3.5" />
              <SkeletonLine width="w-16" height="h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
