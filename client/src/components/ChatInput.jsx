export default function ChatInput({ input, setInput, handleSend }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="border-t border-slate-800 p-4">
      <div className="max-w-3xl mx-auto flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none text-white"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 px-5 rounded-xl hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
