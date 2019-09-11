import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.scss";

import { useOwnRedux } from "./store/login.store";

import { Formik } from "formik";
import Typography from "../../../component/ui-libraries/typography";
import LoginFormComponent from "./login-form.component";
import LoginButtonComponent from "./login-button.component";

import { useTranslation } from "react-i18next";

import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("this_field_is_required"),
  password: Yup.string().required("this_field_is_required")
});

interface ILoginProps {
  history: any;
}

const Login: React.FC<ILoginProps> = ({ history }) => {
  const { t } = useTranslation(["common"]);
  const { isAuth, handleLogin } = useOwnRedux(history);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        handleLogin(values.username);
      }}
    >
      {({ handleSubmit, ...rest }) => {
        return (
          <div className={styles.login}>
            <div className={styles["login__app-name"]}></div>
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" color="primary">
                {t("sign_in")}
              </Typography>
              <LoginFormComponent t={t} {...rest} />
              <LoginButtonComponent label={t("lets_go")} />
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
