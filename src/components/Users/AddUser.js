import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import style from "./AddUser.module.sass";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername || !enteredAge) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (> 0).",
      });
    }
    if (!!enteredUsername && !!enteredAge && +enteredAge > 0) {
      setEnteredUsername("");
      setEnteredAge("");
      props.onAddUser({ name: enteredUsername, age: enteredAge });
    }
  };

  const dismissHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={dismissHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            onChange={usernameChangedHandler}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (years)</label>
          <input
            value={enteredAge}
            onChange={ageChangedHandler}
            type="number"
            id="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
