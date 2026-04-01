import type { SettingsData } from '@/types';

interface SettingsFormContentProps {
  settings: SettingsData;
}

export function SettingsFormContent({ settings }: SettingsFormContentProps) {
  return (
    <div className="rounded-lg border border-border">
      <div className="border-b border-border px-6 py-4">
        <h3 className="font-semibold text-text">Account Settings</h3>
        <p className="mt-1 text-sm text-text-muted">Manage your profile and notification preferences</p>
      </div>

      <div className="flex flex-col gap-5 px-6 py-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text">Display Name</label>
          <input
            className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-text outline-none"
            defaultValue={settings.displayName}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text">Email</label>
          <input
            className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-text outline-none"
            defaultValue={settings.email}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-text">Bio</label>
          <textarea
            className="w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm text-text outline-none"
            rows={3}
            defaultValue={settings.bio}
            readOnly
          />
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="flex flex-col gap-4 px-6 py-5">
        <h4 className="text-sm font-semibold text-text">Preferences</h4>
        {settings.preferences.map((pref) => (
          <div key={pref.key} className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-text">{pref.label}</p>
              <p className="text-xs text-text-muted">{pref.description}</p>
            </div>
            <div
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${pref.enabled ? 'bg-accent' : 'bg-border'}`}
              aria-hidden="true"
            >
              <div
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${pref.enabled ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end border-t border-border px-6 py-4">
        <button className="h-9 rounded-md bg-accent px-4 text-sm font-medium text-bg">Save Changes</button>
      </div>
    </div>
  );
}
