import React, { useState } from "react";
import styles from "./styles.module.css";

const MessageBlock = ({ socket, typing }) => {
  const [message, setMessage] = useState("");

  const isTyping = () =>
    socket.emit("typing", `${localStorage.getItem("user")} is typing`);

  const handlerSend = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketId: socket.id,
      });
    }
    setMessage("");
  };

  return (
    <div className={styles.messageBlock}>
      <form className={styles.form} onSubmit={handlerSend}>
        <input
          type="text"
          className={styles.userMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={isTyping}
        />
        <button className={styles.btn}>Сказать</button>
      </form>

      <div>
        <p>{typing}...</p>
      </div>
    </div>
  );
};

export default MessageBlock;
