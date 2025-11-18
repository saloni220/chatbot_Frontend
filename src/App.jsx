import ChatWindow from "./components/Chatwindow";
import Message from "./components/Message";

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <ChatWindow/>
      {/* <Message who="user" text="Hello from user!" />
      <Message who="bot" text="Hello from bot!" /> */}
      
    </div>
  );
}
