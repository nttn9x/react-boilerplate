import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.scss";

import useLogin from "./login.hook";

import Button from "../../../component/ui-libraries/button";

interface ILoginProps {
  history: any;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const {
    actions,
    storeProps: { isAuth }
  } = useLogin();

  function handleLogin() {
    actions.doLogin();

    history.push("/");
  }

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.login}>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        login
      </Button>
    </div>
  );
};

export default Login;
