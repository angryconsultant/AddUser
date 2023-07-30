import styles from "./UserList.module.css";
import React from "react";
import Card from "../UI/Card/Card"

const UserList = (props) => {
  return (<Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
