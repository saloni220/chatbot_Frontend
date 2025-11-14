import React from "react";

export default function Message({ who, text }) {
  const isUser = who === "user";
  return (
    <div className={`message-row ${isUser ? "user" : "bot"}`}>
      <div className="bubble">
        <div className="bubble-text">{text}</div>
      </div>
    </div>
  );
}
