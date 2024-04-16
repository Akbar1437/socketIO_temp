import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Body = ({ messages, socket }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    socket.emit("logOut", {
      user: localStorage.getItem("user"),
    });
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn} onClick={handleDelete}>
          Покинуть чат
        </button>
      </header>

      <div className={styles.container}>
        {messages.map((element) => (
          <Fragment key={element.id}>
            {element.name === localStorage.getItem("user") ? (
              <div className={styles.chats}>
                <p className={styles.senderName}>Вы</p>
                <div className={styles.messageSender}>
                  <p>{element.text}</p>
                </div>
              </div>
            ) : (
              <div className={styles.chats}>
                <p>{element.name}</p>
                <div className={styles.messageRecipient}>
                  <p>{element.text}</p>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Body;
