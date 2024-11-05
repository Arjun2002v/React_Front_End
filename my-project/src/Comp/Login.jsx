import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { UserContext } from "../App";

const Login = () => {
  const context = useContext(UserContext);
  const user = {
    name: "Arjun",
    password: "1234",
  };
  const [hey, setHey] = useState(false);
  const login = () => {
    if (!userName) alert("UserName is Needed");
    if (!passWord) alert("Passord is Needed");
    if (userName === user.name) {
      setHey(true);
    } else {
      alert("Incorrect UserName");
    }
    if (passWord === user.password) {
      setHey(true);
    } else {
      alert("Incorrect PassWord");
    }
    if (userName === user.name && passWord === user.password) {
      alert("You Are Logged In");
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "User":
        return { ...state, userName: action.payload };
      case "Pass":
        return { ...state, passWord: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, context);
  const { userName, passWord } = state;

  return (
    <>
      <div>
        <div className="log">
          <label htmlFor="UserName">UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) =>
              dispatch({ type: "User", payload: e.target.value })
            }
            required
          />
        </div>
        <div className="log">
          <label htmlFor="UserName">PassWord</label>
          <input
            type="text"
            value={passWord}
            onChange={(e) =>
              dispatch({ type: "Pass", payload: e.target.value })
            }
            required
          />
        </div>
        <button onClick={login}>Login</button>
        {hey ? <h2>Welcome to our Page {userName}</h2> : <></>}
        {/* {hey ? <Welcome /> : <></>} */}
      </div>
    </>
  );
};

export default Login;
