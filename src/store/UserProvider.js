import { useState } from "react";
import { UserContext } from "./user-context";

const UserProvider = (props) => {
  const [userState, setUserState] = useState([]);

  const addUser = (user) => {
    setUserState(prevState => {
      prevState.push(user);
      return prevState;
    });
  }

  const removeUser = (id) => {
    setUserState(prevState => {
        const filteredArray = prevState.filter(item => item.id !== id);
        return filteredArray;
    });
  }

  const initialValue = {
    users: userState,
    addUser,
    removeUser
  };
  return <UserContext.Provider value={initialValue}>{props.children}</UserContext.Provider>
}

export default UserProvider;