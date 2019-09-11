import React, { useState } from "react";
import styles from "./login.module.scss";

import FormControl from "../../../component/ui-libraries/form-control";
import FormHelperText from "../../../component/ui-libraries/form-helper-text";
import Input from "../../../component/ui-libraries/input";
import IconButton from "../../../component/ui-libraries/icon-button";
import InputAdornment from "../../../component/ui-libraries/input-adornment";

interface ILoginFormProps {
  values: any;
  touched: any;
  errors: any;
  handleBlur: any;
  handleChange: any;
  t: any;
}

const LoginForm: React.FC<ILoginFormProps> = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  t
}) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const isErrorUserName = touched.username && Boolean(errors.username);
  const isErrorPassword = touched.password && Boolean(errors.password);
  return (
    <>
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
    </>
  );
};

export default LoginForm;
