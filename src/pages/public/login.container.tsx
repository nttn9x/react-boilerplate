import React, { useState } from "react";

import useLogin from "./login.hook";

interface ILoginProps {
  history: any;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const [value, setValue] = useState(1);
  const { actions } = useLogin();

  function handleLogin() {
    actions.doLogin();

    history.push("/");
  }
  function handleaaaaa() {
    setValue(value + 1);
  }

  return (
    <div>
      <button onClick={handleaaaaa}>{value}</button>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
