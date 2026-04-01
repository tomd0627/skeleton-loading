import { Clock, Target, TrendingUp, Users } from 'lucide-react';

import type { KpiData } from '@/types';

interface DashboardStatsContentProps {
  kpis: KpiData[];
}

const ICONS = {
  'trending-up': TrendingUp,
  users: Users,
  clock: Clock,
  target: Target,
} as const;

function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 120;
  const height = 40;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="40"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke={positive ? 'var(--color-accent)' : 'var(--color-text-muted)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardStatsContent({ kpis }: DashboardStatsContentProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = ICONS[kpi.icon];
        return (
          <div key={kpi.label} className="rounded-xl border border-border bg-skeleton-base p-4">
            <div className="mb-3 flex items-start justify-between">
              <div className="rounded-lg bg-accent-muted p-1.5">
                <Icon size={18} className="text-accent" aria-hidden="true" />
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  kpi.deltaPositive
                    ? 'bg-green-500/15 text-green-400'
                    : 'bg-red-500/15 text-red-400'
                }`}
              >
                {kpi.delta}
              </span>
            </div>
            <p className="text-2xl font-bold text-text">{kpi.value}</p>
            <p className="mt-0.5 text-xs text-text-muted">{kpi.label}</p>
            <div className="mt-3">
              <Sparkline data={kpi.sparkline} positive={kpi.deltaPositive} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
