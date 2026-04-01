interface SkeletonLineProps {
  width?: string;
  height?: string;
  className?: string;
}

export function SkeletonLine({ width = 'w-full', height = 'h-4', className = '' }: SkeletonLineProps) {
  return <div className={`shimmer rounded ${width} ${height} ${className}`} aria-hidden="true" />;
}
