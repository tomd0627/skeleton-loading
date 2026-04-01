'use client';

import { Eye, EyeOff } from 'lucide-react';

interface ToggleButtonProps {
  isLoading: boolean;
  onToggle: () => void;
}

export function ToggleButton({ isLoading, onToggle }: ToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={isLoading}
      aria-label={isLoading ? 'Show content' : 'Show loading skeleton'}
      className="flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-150 hover:border-accent hover:text-text"
    >
      {isLoading ? <Eye size={16} aria-hidden="true" /> : <EyeOff size={16} aria-hidden="true" />}
      <span className="hidden sm:inline">{isLoading ? 'Show Content' : 'Show Loading'}</span>
    </button>
  );
}
