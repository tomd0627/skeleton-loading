import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-text">Skeleton Demo</span>
          <span className="hidden text-sm text-text-muted sm:inline">Loading state patterns</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
