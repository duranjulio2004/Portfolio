import { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Send it to backend
        fetch("https://portfolio-server-production-315f.up.railway.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ newMessage: newMessage.text }),
        })
        .then((res) => res.json())
        .then((data) => {
            setMessages((prev) => [
            ...prev,
            { sender: "bot", text: data.reply },
            ]);
        })
        .catch((err) => {
            console.error("Error:", err);
            setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "Sorry, something went wrong." },
            ]);
        });

    setInput("");
  };

  return (
    <div className="w-full max-w-9/10 h-100 flex flex-col rounded-xl shadow-lg bg-[#1a1d24] border border-white/10">

        {/* Title */}
        <div className="px-4 py-3 border-b border-gray-700 text-center">
            <h2 className="text-lg font-semibold text-white">💬 Chat with My Bot</h2>
        </div>

      {/* Chat display */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-600 text-white self-end ml-auto"
                : "bg-gray-700 text-gray-200 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex p-3 border-t border-gray-700">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
