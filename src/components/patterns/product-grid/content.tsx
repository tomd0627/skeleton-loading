import { Star } from 'lucide-react';

import type { ProductData } from '@/types';

interface ProductGridContentProps {
  products: ProductData[];
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          aria-hidden="true"
          className={i < filled ? 'text-gold' : 'text-border'}
          fill={i < filled ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export function ProductGridContent({ products }: ProductGridContentProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="overflow-hidden rounded-xl border border-border bg-skeleton-base">
          <div
            className="w-full"
            style={{ aspectRatio: '4/3', backgroundColor: `var(--color-swatch-${product.swatch})` }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1.5 p-3">
            {product.badge && (
              <span className="w-fit rounded-full bg-accent-muted px-2 py-0.5 text-[10px] font-semibold text-accent">
                {product.badge}
              </span>
            )}
            <p className="text-sm font-medium leading-snug text-text">{product.name}</p>
            <p className="text-sm font-bold text-text">{product.price}</p>
            <div className="flex items-center gap-1.5">
              <StarRating rating={product.rating} />
              <span className="text-[10px] text-text-muted">({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
