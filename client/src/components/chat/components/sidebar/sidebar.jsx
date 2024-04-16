import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const SideBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("responseNewUser", (data) => setUsers(data));
  }, [socket]);

  const filteredUsers = users.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (item) => item.user === value.user && item.socketId === value.socketId
      )
  );

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.header}>Users</h4>
      <ul className={styles.users}>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user.user}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
