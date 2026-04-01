interface SkeletonBoxProps {
  aspectRatio?: string;
  className?: string;
}

export function SkeletonBox({ aspectRatio = '16/9', className = '' }: SkeletonBoxProps) {
  return (
    <div
      className={`shimmer w-full ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  );
}
