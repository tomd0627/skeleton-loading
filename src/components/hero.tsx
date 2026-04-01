const techBadges = ['Next.js 16', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript'];

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-text md:text-5xl">
          Skeleton Screen &amp;
          <br />
          <span className="text-accent">Loading State</span> Library
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-text-muted">
          Eight production-ready loading patterns with smooth content-reveal transitions. Each
          pattern demonstrates perceived performance techniques — the science of making interfaces
          feel faster than they are.
        </p>
        <ul className="flex flex-wrap gap-3" aria-label="Built with">
          {techBadges.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
