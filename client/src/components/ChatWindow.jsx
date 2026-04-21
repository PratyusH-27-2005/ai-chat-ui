import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        {messages.length === 0 && !isTyping && (
          <div className="text-slate-400 text-center mt-20">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Welcome to AI Chat
            </h3>
            <p>Start a conversation by typing a message below.</p>
          </div>
        )}

        {messages.map((msg, index) => (
          <MessageBubble key={index} msg={msg} />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
