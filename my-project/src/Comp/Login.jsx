import React, { useContext, useReducer, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Login = () => {
  const initial = { userName: "", password: "" };
  const nav = useNavigate(); // used to navigate through the router url

  const users = useContext(UserContext); //using context to pass state from global state

  const login = () => {
    if (!userName) alert("UserName is Needed");
    if (!password) alert("Password is Needed");

    const newUser = users.find(
      (user) => user.name === userName && user.password === password
    );
    if (newUser) {
      alert("You Are Logged In");
      nav(`/welcome/${newUser.id}`); // if it is succussful then it should navigate to the welcome router
    } else {
      alert("Error in login");
    }
  };

  // Reducer function to update state
  const reducer = (state, action) => {
    switch (action.type) {
      case "User":
        return { ...state, userName: action.payload };
      case "Pass":
        return { ...state, password: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);
  const { userName, password } = state;

  return (
    <div>
      <Nav />
      <div className="log">
        <label htmlFor="UserName">UserName</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => dispatch({ type: "User", payload: e.target.value })}
          required
        />
      </div>
      <div className="log">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch({ type: "Pass", payload: e.target.value })}
          required
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
