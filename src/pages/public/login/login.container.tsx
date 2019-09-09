import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.scss";

import { useOwnRedux } from "./store/login.store";

import { Formik } from "formik";
import Button from "../../../component/ui-libraries/button";
import FormControl from "../../../component/ui-libraries/form-control";
import FormHelperText from "../../../component/ui-libraries/form-helper-text";
import Input from "../../../component/ui-libraries/input";
import InputLabel from "../../../component/ui-libraries/input-label";

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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => {
        const isErrorUserName = touched.username && Boolean(errors.username);
        const isErrorPassword = touched.password && Boolean(errors.password);
        return (
          <div className={styles.login}>
            <form onSubmit={handleSubmit}>
              <FormControl error={isErrorUserName}>
                <InputLabel htmlFor="component-error">
                  {t(`username`)}
                </InputLabel>
                <Input
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {isErrorUserName && (
                  <FormHelperText>
                    {isErrorUserName && t(`${errors.username}`)}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl error={Boolean(isErrorPassword)}>
                <InputLabel htmlFor="component-error">
                  {t(`password`)}
                </InputLabel>
                <Input
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <FormHelperText>
                  {isErrorPassword && t(`${errors.password}`)}
                </FormHelperText>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
                login
              </Button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
