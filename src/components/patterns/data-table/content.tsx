import type { ProjectRow } from '@/types';

import { COL_WIDTHS } from './skeleton';

interface DataTableContentProps {
  rows: ProjectRow[];
}

const STATUS_STYLES: Record<ProjectRow['status'], string> = {
  'In Progress': 'bg-gold/20 text-gold',
  Completed: 'bg-green-500/20 text-green-400',
  Review: 'bg-accent-muted text-accent',
  'On Hold': 'bg-border text-text-muted',
};

const HEADERS = ['Project', 'Status', 'Completion', 'Budget', 'Last Updated'];

export function DataTableContent({ rows }: DataTableContentProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            {HEADERS.map((h, i) => (
              <th
                key={h}
                className={`${COL_WIDTHS[i]} px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.project} className="border-b border-border last:border-0 hover:bg-skeleton-base/50">
              <td className="px-3 py-3.5 font-medium text-text">{row.project}</td>
              <td className="px-3 py-3.5">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-3 py-3.5">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${row.completion}%` }}
                      role="progressbar"
                      aria-valuenow={row.completion}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${row.completion}% complete`}
                    />
                  </div>
                  <span className="text-xs text-text-muted">{row.completion}%</span>
                </div>
              </td>
              <td className="px-3 py-3.5 text-text-muted">{row.budget}</td>
              <td className="px-3 py-3.5 text-text-muted">{row.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
