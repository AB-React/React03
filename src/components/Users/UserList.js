import React from "react";
import Card from "../UI/Card";

import style from "./UserList.module.sass";

const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul className={style.users.ul}>
        {props.users.map((user, index) => {
          return (
            <li className={style.users.li} key={`aaa${index} `}>
              {user.name} ({user.age}) Years old - {index}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
