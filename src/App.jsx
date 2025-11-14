export default function Message({ who, text }) {
  return (
    <div className={`msg-row ${who}`}>
      <div className="msg-bubble">
        {text}
      </div>
    </div>
  );
}
