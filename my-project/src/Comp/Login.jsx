import React, { useReducer, useState } from "react";

const Login = () => {
  const dummy = {
    name: "Arjun",
    password: "1234",
  };
  const [hey, setHey] = useState(false);
  const login = () => {
    if (userName === dummy.name) {
      setHey(true);
    } else {
      alert("Incorrect UserName");
    }
    if (passWord === dummy.password) {
      setHey(true);
    } else {
      alert("Incorrect PassWord");
    }
    if (userName === dummy.name && passWord === dummy.password) {
      alert("You Are Logged In");
    }
  };

  const intial = { userName: "", passWord: "" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "User":
        return { ...state, userName: action.payload };
      case "Pass":
        return { ...state, passWord: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, intial);
  const { userName, passWord } = state;

  return (
    <>
      <div>Welcome to My Page</div>
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
        {hey ? <div>Welcome to My Page</div> : <></>}
      </div>
    </>
  );
};

export default Login;
