const techStack = [
  'Next.js 16',
  'React 19',
  'Tailwind CSS v4',
  'Framer Motion',
  'TypeScript',
  'Lucide React',
];

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ul aria-label="Built with" className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <li
                key={t}
                className="rounded border border-border bg-surface px-2 py-1 text-xs text-text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
