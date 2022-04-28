import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.sass";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!!enteredUsername && !!enteredAge && +enteredAge > 0) {
      setEnteredUsername("");
      setEnteredAge("");
      console.log(enteredUsername, enteredAge);
    }
  };

  return (
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
  );
};

export default AddUser;
