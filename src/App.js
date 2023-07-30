import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userInput) => {
    console.log("addHandler", userInput);
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { username: userInput.username, age: userInput.age, id: Math.random.toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
