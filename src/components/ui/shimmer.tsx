interface ShimmerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Shimmer({ children, className = '' }: ShimmerProps) {
  return (
    <div className={`shimmer ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}
