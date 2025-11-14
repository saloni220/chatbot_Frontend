export default function Message({ who, text }) {
  return (
    <div className={`msg-row ${who === "user" ? "user" : "bot"}`}>
      <div className="msg-bubble">
        {text}
      </div>
    </div>
  );
}
