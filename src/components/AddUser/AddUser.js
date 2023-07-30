import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const intialUserInput = {
    username: "",
    age: "",
  };

  const [userInput, setUserInput] = useState(intialUserInput);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (userInput.age < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userInput);
    setUserInput(intialUserInput);
  };

  const changeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(event) =>
                changeHandler("username", event.target.value)
              }
              value={userInput.username}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              max="120"
              min="0"
              id="age"
              onChange={(event) => changeHandler("age", event.target.value)}
              value={userInput.age}
            />
          </div>
          <div>
            <Button onClick={addUserHandler} type="button">
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
