import { SkeletonLine } from '@/components/ui/skeleton-line';

// Shared with content.tsx to guarantee identical column widths
export const COL_WIDTHS = ['w-[30%]', 'w-[15%]', 'w-[20%]', 'w-[15%]', 'w-[20%]'];

const ROW_WIDTHS = [
  ['w-full', 'w-3/4', 'w-full', 'w-3/4', 'w-2/3'],
  ['w-5/6', 'w-full', 'w-2/3', 'w-full', 'w-3/4'],
  ['w-full', 'w-2/3', 'w-3/4', 'w-2/3', 'w-full'],
  ['w-4/5', 'w-full', 'w-full', 'w-3/4', 'w-2/3'],
  ['w-full', 'w-3/4', 'w-5/6', 'w-full', 'w-3/4'],
];

export function DataTableSkeleton() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            {COL_WIDTHS.map((w, i) => (
              <th key={i} className="px-3 py-3 text-left font-medium">
                <SkeletonLine width={w} height="h-4" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROW_WIDTHS.map((row, ri) => (
            <tr key={ri} className="border-b border-border last:border-0">
              {row.map((w, ci) => (
                <td key={ci} className="px-3 py-3.5">
                  <SkeletonLine width={w} height="h-4" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
