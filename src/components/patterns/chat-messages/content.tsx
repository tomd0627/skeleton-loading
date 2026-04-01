import type { ChatMessage } from '@/types';

interface ChatMessagesContentProps {
  messages: ChatMessage[];
}

export function ChatMessagesContent({ messages }: ChatMessagesContentProps) {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
              msg.sent
                ? 'rounded-br-sm bg-accent text-bg'
                : 'rounded-bl-sm border border-border bg-skeleton-base text-text'
            }`}
          >
            <p className="text-sm leading-relaxed">{msg.text}</p>
            <p
              className={`mt-1 text-right text-[10px] ${
                msg.sent ? 'text-bg/70' : 'text-text-muted'
              }`}
            >
              {msg.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
