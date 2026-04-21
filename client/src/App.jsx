import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("ai-chat-chats");
    return savedChats
      ? JSON.parse(savedChats)
      : [
          {
            id: 1,
            title: "New Chat",
            messages: [],
          },
        ];
  });

  const [activeChatId, setActiveChatId] = useState(() => {
    const savedActiveId = localStorage.getItem("ai-chat-active-id");
    return savedActiveId ? JSON.parse(savedActiveId) : 1;
  });

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId) || chats[0];

  useEffect(() => {
    localStorage.setItem("ai-chat-chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem("ai-chat-active-id", JSON.stringify(activeChatId));
  }, [activeChatId]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setInput("");
    setIsTyping(false);
  };

  const deleteChat = (chatId) => {
    if (chats.length === 1) {
      const freshChat = {
        id: Date.now(),
        title: "New Chat",
        messages: [],
      };
      setChats([freshChat]);
      setActiveChatId(freshChat.id);
      return;
    }

    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);

    if (activeChatId === chatId) {
      setActiveChatId(updatedChats[0].id);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping || !activeChat) return;

    const currentInput = input;
    const userMessage = { role: "user", text: currentInput };

    const updatedMessages = [...activeChat.messages, userMessage];

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title:
                chat.messages.length === 0
                  ? currentInput.slice(0, 20)
                  : chat.title,
              messages: updatedMessages,
            }
          : chat,
      ),
    );

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          history: activeChat.messages,
        }),
      });

      const data = await response.json();

      const botMessage = {
        role: "bot",
        text: data.reply || "No reply received from server.",
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [...updatedMessages, botMessage],
              }
            : chat,
        ),
      );
    } catch (error) {
      const errorMessage = {
        role: "bot",
        text: "Something went wrong while connecting to the backend.",
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [...updatedMessages, errorMessage],
              }
            : chat,
        ),
      );
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-screen bg-slate-950 text-white flex">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        createNewChat={createNewChat}
        deleteChat={deleteChat}
      />

      <Home
        messages={activeChat?.messages || []}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        isTyping={isTyping}
      />
    </div>
  );
}
