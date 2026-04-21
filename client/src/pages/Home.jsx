import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function Home({
  messages,
  input,
  setInput,
  handleSend,
  isTyping,
}) {
  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-lg font-semibold">AI Chat</h2>
      </div>

      <ChatWindow messages={messages} isTyping={isTyping} />

      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
}
