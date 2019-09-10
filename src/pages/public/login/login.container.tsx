import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./login.module.scss";

import { useOwnRedux } from "./store/login.store";

import { Formik } from "formik";
import Fab from "../../../component/ui-libraries/fab";
import FormControl from "../../../component/ui-libraries/form-control";
import FormHelperText from "../../../component/ui-libraries/form-helper-text";
import Input from "../../../component/ui-libraries/input";
import IconButton from "../../../component/ui-libraries/icon-button";
import Typography from "../../../component/ui-libraries/typography";
import InputAdornment from "../../../component/ui-libraries/input-adornment";

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
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { isAuth, handleLogin } = useOwnRedux(history);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
            <div className={styles["login__app-name"]}></div>
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" color="primary">
                SIGN IN
              </Typography>
              <FormControl
                classes={{ root: styles["login__field"] }}
                error={isErrorUserName}
              >
                <Input
                  autoComplete="new-password"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={t(`username`)}
                  startAdornment={
                    <InputAdornment position="start">
                      <i className="material-icons">perm_identity</i>
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  {isErrorUserName && t(`${errors.username}`)}
                </FormHelperText>
              </FormControl>
              <FormControl
                classes={{ root: styles["login__field"] }}
                error={Boolean(isErrorPassword)}
              >
                <Input
                  placeholder={t(`password`)}
                  value={values.password}
                  autoComplete="new-password"
                  name="password"
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <i className="material-icons">lock_open</i>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <i className="material-icons">
                          {showPassword ? "visibility" : "visibility_off"}
                        </i>
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>
                  {isErrorPassword && t(`${errors.password}`)}
                </FormHelperText>
              </FormControl>
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                type="submit"
              >
                {t("lets_go")}
              </Fab>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
