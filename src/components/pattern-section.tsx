'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { ToggleButton } from './toggle-button';

interface PatternSectionProps {
  name: string;
  slug: string;
  rationale: string;
  skeleton: React.ReactNode;
  content: React.ReactNode;
}

export function PatternSection({ name, slug, rationale, skeleton, content }: PatternSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function handleToggle() {
    setIsLoading((prev) => !prev);
  }

  const containerProps = isLoading
    ? ({
        'aria-busy': true,
        'aria-label': `Loading ${name}`,
        role: 'status' as const,
        'aria-live': 'polite' as const,
      } as const)
    : {};

  return (
    <section id={slug} className="scroll-mt-20 border-b border-border py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="mb-2 text-2xl font-semibold text-text">{name}</h2>
            <p className="max-w-prose text-sm leading-relaxed text-text-muted">{rationale}</p>
          </div>
          <ToggleButton isLoading={isLoading} onToggle={handleToggle} />
        </div>

        <div
          className="rounded-xl border border-border bg-surface p-6 md:p-8"
          {...containerProps}
        >
          {reducedMotion ? (
            <div>{isLoading ? skeleton : content}</div>
          ) : (
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="skeleton"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {skeleton}
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {content}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
