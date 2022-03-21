import React from "react";

export const UserContext = React.createContext({
  users: [],
  addUser: (user) => {},
  removeUser: (id) => {}
});