import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/bot/v1/message";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 0, who: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), who: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMsg.text }),
      });

      const data = await res.json();
      const botMsg = {
        id: Date.now() + 1,
        who: "bot",
        text: data?.botMessage || "Sorry — I didn’t understand.",
      };

      setTimeout(() => {
        setMessages((m) => [...m, botMsg]);
        setIsTyping(false);
      }, 600);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, who: "bot", text: "Server error." },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="chatgpt-body">
      <div className="chatgpt-messages">
        {messages.map((m) => (
          <Message key={m.id} who={m.who} text={m.text} />
        ))}

        {isTyping && (
          <div className="chatgpt-typing">
            <span></span><span></span><span></span>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="chatgpt-input-area">
        <input
          className="chatgpt-input"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="chatgpt-send" onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
