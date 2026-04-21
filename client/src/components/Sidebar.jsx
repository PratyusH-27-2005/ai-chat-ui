export default function Sidebar({
  chats,
  activeChatId,
  setActiveChatId,
  createNewChat,
  deleteChat,
}) {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
      <h1 className="text-lg font-semibold mb-4">💬 Chats</h1>

      <button
        onClick={createNewChat}
        className="w-full bg-blue-600 py-2 rounded-lg mb-4 hover:bg-blue-500"
      >
        + New Chat
      </button>

      <div className="space-y-2 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`w-full p-2 rounded-lg transition flex items-center justify-between ${
              activeChatId === chat.id
                ? "bg-slate-800 text-white"
                : "bg-transparent text-slate-300 hover:bg-slate-800"
            }`}
          >
            <button
              onClick={() => setActiveChatId(chat.id)}
              className="flex-1 text-left truncate"
            >
              {chat.title}
            </button>

            <button
              onClick={() => deleteChat(chat.id)}
              className="ml-2 text-slate-400 hover:text-red-400"
              title="Delete chat"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
