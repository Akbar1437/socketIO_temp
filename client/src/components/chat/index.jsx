import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/sidebar";
import Body from "./components/body/body";
import MessageBlock from "./components/message-block/message-block";
import styles from "./styles.module.css";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    socket.on("response", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    socket.on("responseTyping", (data) => {
      setTyping(data);
    });
  }, [socket, messages]);
  return (
    <div className={styles.chat}>
      <SideBar socket={socket} />
      <main className={styles.main}>
        <Body messages={messages} socket={socket} />
        <MessageBlock socket={socket} typing={typing} />
      </main>
    </div>
  );
};

export default ChatPage;
