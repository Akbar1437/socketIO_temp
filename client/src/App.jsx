import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { io } from "socket.io-client";
import ChatPage from "./components/chat";
const socket = io("http://localhost:5001");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Routes>
  );
}

export default App;
