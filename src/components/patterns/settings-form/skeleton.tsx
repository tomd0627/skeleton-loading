import { SkeletonLine } from '@/components/ui/skeleton-line';

export function SettingsFormSkeleton() {
  return (
    <div className="rounded-lg border border-border">
      <div className="border-b border-border px-6 py-4">
        <SkeletonLine width="w-36" height="h-5" />
        <div className="mt-2">
          <SkeletonLine width="w-64" height="h-3.5" />
        </div>
      </div>

      <div className="flex flex-col gap-5 px-6 py-5">
        <div className="flex flex-col gap-1.5">
          <SkeletonLine width="w-28" height="h-3.5" />
          <div className="shimmer h-10 w-full rounded-md" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1.5">
          <SkeletonLine width="w-16" height="h-3.5" />
          <div className="shimmer h-10 w-full rounded-md" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1.5">
          <SkeletonLine width="w-8" height="h-3.5" />
          <div className="shimmer h-20 w-full rounded-md" aria-hidden="true" />
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="flex flex-col gap-4 px-6 py-5">
        <SkeletonLine width="w-24" height="h-4" />
        {[{ label: 'w-40', desc: 'w-56' }, { label: 'w-32', desc: 'w-48' }, { label: 'w-44', desc: 'w-60' }].map(
          (w, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <SkeletonLine width={w.label} height="h-3.5" />
                <SkeletonLine width={w.desc} height="h-3" />
              </div>
              <div className="shimmer h-6 w-11 shrink-0 rounded-full" aria-hidden="true" />
            </div>
          ),
        )}
      </div>

      <div className="flex justify-end border-t border-border px-6 py-4">
        <div className="shimmer h-9 w-28 rounded-md" aria-hidden="true" />
      </div>
    </div>
  );
}
