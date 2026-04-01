import { BarChart2, Calendar, Folder, Inbox, LayoutDashboard, Plus, Settings, Users } from 'lucide-react';

import type { NavData, NavItem } from '@/types';

interface SidebarNavContentProps {
  nav: NavData;
}

const ICONS = {
  'layout-dashboard': LayoutDashboard,
  'bar-chart-2': BarChart2,
  folder: Folder,
  inbox: Inbox,
  users: Users,
  plus: Plus,
  settings: Settings,
  calendar: Calendar,
} as const;

function NavItemRow({ item }: { item: NavItem }) {
  const Icon = ICONS[item.icon];
  return (
    <div
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${
        item.active
          ? 'bg-accent-muted font-medium text-accent'
          : 'text-text-muted hover:bg-surface hover:text-text'
      }`}
    >
      <Icon size={17} className="shrink-0" aria-hidden="true" />
      <span className="flex-1">{item.label}</span>
      {item.badge != null && (
        <span className="rounded-full bg-accent px-1.5 py-0.5 text-xs font-semibold leading-none text-bg">
          {item.badge}
        </span>
      )}
    </div>
  );
}

export function SidebarNavContent({ nav }: SidebarNavContentProps) {
  return (
    <div className="flex w-64 flex-col gap-1 rounded-lg border border-border p-3">
      <div className="mb-2 flex items-center gap-2.5 px-3 py-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent text-xs font-bold text-bg">
          {nav.appName[0]}
        </div>
        <span className="text-sm font-semibold text-text">{nav.appName}</span>
      </div>

      {nav.sections.map((section, i) => (
        <div key={i}>
          {section.label && (
            <p className="mb-1 mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              {section.label}
            </p>
          )}
          {section.items.map((item) => (
            <NavItemRow key={item.label} item={item} />
          ))}
        </div>
      ))}

      <div className="mt-auto pt-3">
        <div className="border-t border-border pt-3">
          <div className="flex items-center gap-3 rounded-md px-3 py-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg">
              {nav.user.avatarInitials}
            </div>
            <div>
              <p className="text-sm font-medium leading-tight text-text">{nav.user.name}</p>
              <p className="text-xs text-text-muted">{nav.user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
