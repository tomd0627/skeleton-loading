import { Heart, MessageCircle, Repeat2 } from 'lucide-react';

import type { SocialPostData } from '@/types';

interface SocialFeedContentProps {
  posts: SocialPostData[];
}

function formatCount(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export function SocialFeedContent({ posts }: SocialFeedContentProps) {
  return (
    <div className="divide-y divide-border">
      {posts.map((post) => (
        <div key={post.id} className="flex gap-3 py-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg"
            aria-hidden="true"
          >
            {post.author.avatarInitials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-baseline gap-1.5">
              <span className="text-sm font-semibold text-text">{post.author.name}</span>
              <span className="text-xs text-text-muted">{post.author.handle}</span>
              <span className="text-xs text-text-muted">· {post.timestamp}</span>
            </div>
            <p className="mb-3 min-h-[2.5rem] text-sm leading-relaxed text-text">{post.content}</p>
            <div className="flex gap-6">
              <button
                className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent"
                aria-label={`${post.likes} likes`}
              >
                <Heart size={14} aria-hidden="true" />
                <span>{formatCount(post.likes)}</span>
              </button>
              <button
                className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent"
                aria-label={`${post.replies} replies`}
              >
                <MessageCircle size={14} aria-hidden="true" />
                <span>{formatCount(post.replies)}</span>
              </button>
              <button
                className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent"
                aria-label={`${post.reposts} reposts`}
              >
                <Repeat2 size={14} aria-hidden="true" />
                <span>{formatCount(post.reposts)}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
