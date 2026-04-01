import type { BlogPostData } from '@/types';

interface BlogCardContentProps {
  post: BlogPostData;
}

export function BlogCardContent({ post }: BlogCardContentProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className="w-full bg-surface"
        style={{ aspectRatio: '16/9' }}
        aria-hidden="true"
      >
        <div className="flex h-full items-center justify-center">
          <span className="text-xs text-text-muted">Cover Image</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold leading-snug text-text">{post.title}</h3>
        <p className="text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
        <div className="mt-1 flex items-center gap-3 border-t border-border pt-4">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg"
            aria-hidden="true"
          >
            {post.author.avatarInitials}
          </div>
          <div>
            <p className="text-sm font-medium text-text">{post.author.name}</p>
            <p className="text-xs text-text-muted">{post.author.role}</p>
          </div>
          <div className="ml-auto flex gap-3 text-xs text-text-muted">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
