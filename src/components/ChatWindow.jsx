import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/bot/v1/message";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 0, who: "bot", text: "Hello — ask me something!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);  // ⭐ ADD: typing animation state

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // add user message
    const userMsg = { id: Date.now(), who: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setIsTyping(true);    // ⭐ bot typing starts
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),  // CORRECT BODY FIELD
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();

      const botText = data?.botMessage || "Sorry — I don't understand.";

      // simulate a natural typing delay (optional)
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { id: Date.now() + 1, who: "bot", text: botText },
        ]);
      }, 700); // ⭐ bot message delay

    } catch (err) {
      console.error(err);
      setError("Unable to reach chatbot. Try again.");

      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, who: "bot", text: "Sorry — I couldn't respond." },
      ]);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setIsTyping(false);   // ⭐ bot typing ends
      }, 700);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-window">
      <div className="messages">

        {messages.map((m) => (
          <Message key={m.id} who={m.who} text={m.text} />
        ))}

        {/* ⭐ BOT TYPING INDICATOR */}
        {isTyping && (
          <div className="typing">
            <span></span><span></span><span></span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form className="composer" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />

        <button type="submit" disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
}
