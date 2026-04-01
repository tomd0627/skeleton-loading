import { SkeletonBox } from '@/components/ui/skeleton-box';

// Aspect ratios match real gallery items exactly to prevent reflow on reveal
const ASPECT_RATIOS = ['4/3', '3/4', '1/1', '16/9', '3/4', '4/3', '1/1', '16/9'];

export function MediaGallerySkeleton() {
  return (
    <div className="columns-2 gap-3 md:columns-4">
      {ASPECT_RATIOS.map((ratio, i) => (
        <div key={i} className="mb-3 break-inside-avoid">
          <SkeletonBox aspectRatio={ratio} className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
