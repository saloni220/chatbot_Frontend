import React from "react";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Simple Chatbot</h1>
        <p>Talk to the bot — if it doesn't know, it'll say "sorry".</p>
      </header>

      <main>
        <ChatWindow />
      </main>
    </div>
  );
}
