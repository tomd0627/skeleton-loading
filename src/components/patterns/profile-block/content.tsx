import type { ProfileData } from '@/types';

interface ProfileBlockContentProps {
  profile: ProfileData;
}

export function ProfileBlockContent({ profile }: ProfileBlockContentProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-lg font-bold text-bg"
        aria-hidden="true"
      >
        {profile.avatarInitials}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-text">{profile.name}</h3>
        <p className="text-sm text-text-muted">
          {profile.title} · {profile.company}
        </p>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-text-muted">{profile.bio}</p>
      <div className="grid w-full grid-cols-3 gap-4 border-t border-b border-border py-4">
        <div>
          <p className="text-lg font-bold text-text">{profile.stats.projects}</p>
          <p className="text-xs text-text-muted">Projects</p>
        </div>
        <div>
          <p className="text-lg font-bold text-text">{profile.stats.followers}</p>
          <p className="text-xs text-text-muted">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold text-text">{profile.stats.following}</p>
          <p className="text-xs text-text-muted">Following</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-skeleton-base px-3 py-1 text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
