import { Shimmer } from '@/components/ui/shimmer';

const SKELETON_BUBBLES: Array<{ sent: boolean; width: string }> = [
  { sent: false, width: 'w-48' },
  { sent: true, width: 'w-64' },
  { sent: false, width: 'w-56' },
  { sent: true, width: 'w-72' },
  { sent: false, width: 'w-40' },
  { sent: true, width: 'w-60' },
];

export function ChatMessagesSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {SKELETON_BUBBLES.map((bubble, i) => (
        <div key={i} className={`flex ${bubble.sent ? 'justify-end' : 'justify-start'}`}>
          <Shimmer
            className={`h-10 max-w-[80%] rounded-2xl ${bubble.width} ${
              bubble.sent ? 'rounded-br-sm' : 'rounded-bl-sm'
            }`}
          />
        </div>
      ))}
    </div>
  );
}
