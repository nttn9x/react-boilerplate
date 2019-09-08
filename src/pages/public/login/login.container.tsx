import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.scss";

import { useOwnRedux } from "./store/login.store";

import Button from "../../../component/ui-libraries/button";
import TextField from "../../../component/ui-libraries/text-field";

interface ILoginProps {
  history: any;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const [
    { isAuth, username, password },
    { handleLogin, handleChange }
  ] = useOwnRedux(history);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.login}>
      <TextField
        name="username"
        label="username"
        value={username}
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="password"
        value={password}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        login
      </Button>
    </div>
  );
};

export default Login;
