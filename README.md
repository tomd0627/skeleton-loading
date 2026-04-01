# Skeleton Loading Patterns

A portfolio demo showcasing 8 production-ready skeleton screen and loading state patterns with smooth content-reveal transitions. Each pattern is documented with its perceived performance rationale.

---

## Patterns

| #   | Pattern             | What it demonstrates                                                                          |
| --- | ------------------- | --------------------------------------------------------------------------------------------- |
| 1   | **Blog Post Card**  | Image + title + excerpt + author hierarchy; spatial layout expectations before data           |
| 2   | **Social Feed**     | Variable-length content with min-height CLS prevention; action button dimension matching      |
| 3   | **Profile Block**   | High-intent page skeleton; staggered line widths communicating name > title > bio hierarchy   |
| 4   | **Data Table**      | Shared column-width constants between skeleton and real table for sub-pixel alignment         |
| 5   | **Product Grid**    | All 6 cards rendered simultaneously; locked aspect ratios prevent image-load CLS              |
| 6   | **Dashboard Stats** | KPI layout pre-allocation; inline SVG sparklines without a chart library                      |
| 7   | **Media Gallery**   | CSS `columns` masonry; per-item aspect ratios match real content for zero reflow              |
| 8   | **Chat Messages**   | Alignment mirrors sent/received authorship; speech-bubble border-radius preserved in skeleton |

---

## Tech Stack

| Tool          | Version | Role                                     |
| ------------- | ------- | ---------------------------------------- |
| Next.js       | 16      | Framework (App Router, static export)    |
| React         | 19      | UI library                               |
| TypeScript    | 5       | Type safety                              |
| Tailwind CSS  | 4       | Styling (CSS-first `@theme` config)      |
| Framer Motion | 12      | Skeleton → content transition animations |
| Lucide React  | 1       | Icon set                                 |

---

## Perceived Performance Philosophy

Perceived performance and actual performance are not the same thing. A page that loads in 400ms but shows a blank screen _feels_ slower than one that loads in 800ms but immediately renders a skeleton. This is because:

- **Spatial expectations** — skeletons communicate layout structure before data arrives, reducing cognitive load on reveal
- **Progress signaling** — animated shimmer indicates work is happening, not a frozen UI
- **Zero layout shift** — when skeleton dimensions match content dimensions exactly, the reveal is seamless

Every pattern in this demo is built with zero CLS (Cumulative Layout Shift) as a hard constraint — skeleton and content states occupy identical space.

---

## Accessibility

- `aria-busy="true"`, `role="status"`, `aria-live="polite"` on all loading containers
- `aria-hidden="true"` on all skeleton elements (decorative, not content)
- `aria-pressed` + `aria-label` on all toggle buttons
- `prefers-reduced-motion`: shimmer animation disabled, Framer Motion transitions bypassed
- WCAG AA contrast on all text (warm near-white `#f5f0eb` on dark `#0e0c0b` ≈ 15:1)
- Full keyboard navigation with visible coral focus rings

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # Production build → out/
npm run lint     # ESLint
npm run format   # Prettier
```

---

## Deployment

Deploys to Netlify as a fully static site (`output: 'export'`). The `out/` directory is served directly — no server runtime required.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"
```
