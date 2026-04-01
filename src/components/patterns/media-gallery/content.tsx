import type { GalleryItem } from '@/types';

interface MediaGalleryContentProps {
  items: GalleryItem[];
}

export function MediaGalleryContent({ items }: MediaGalleryContentProps) {
  return (
    <div className="columns-2 gap-3 md:columns-4">
      {items.map((item) => (
        <div key={item.id} className="mb-3 break-inside-avoid">
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: item.aspectRatio, backgroundColor: `var(--color-swatch-${item.swatch})` }}
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
              <p className="text-[10px] font-medium text-white/80">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
