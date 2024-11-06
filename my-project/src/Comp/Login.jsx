import React, { useContext, useReducer, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initial = { userName: "", password: "" };
  const nav = useNavigate();

  const users = useContext(UserContext);

  // Login handler
  const login = () => {
    if (!userName) alert("UserName is Needed");
    if (!password) alert("Password is Needed");

    const newUser = users.find(
      (user) => user.name === userName && user.password === password
    );
    if (newUser) {
      alert("You Are Logged In");
      nav(`/welcome/${newUser.id}`); // Make sure this matches your route setup
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
          type="password" // Change input type to "password" for better security
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
