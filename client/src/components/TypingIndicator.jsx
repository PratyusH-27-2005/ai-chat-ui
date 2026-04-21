export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-slate-800 text-white px-4 py-3 rounded-2xl">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>
      </div>
    </div>
  );
}
