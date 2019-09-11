import React, { useState } from "react";
import styles from "./login.module.scss";

import FormControl from "../../../component/ui-libraries/form-control";
import FormHelperText from "../../../component/ui-libraries/form-helper-text";
import Input from "../../../component/ui-libraries/input";
import IconButton from "../../../component/ui-libraries/icon-button";
import InputAdornment from "../../../component/ui-libraries/input-adornment";
import PermIdentityIcon from "../../../component/ui-libraries/icons/perm-identity";
import LockOpenIcon from "../../../component/ui-libraries/icons/lock-open";
import VisibilityIcon from "../../../component/ui-libraries/icons/visibility";
import VisibilityOffIcon from "../../../component/ui-libraries/icons/visibility-off";

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
          inputProps={{
            "aria-label": "username"
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={t(`username`)}
          startAdornment={
            <InputAdornment aria-label="User Name Icon" position="start">
              <PermIdentityIcon />
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
          inputProps={{
            "aria-label": "password"
          }}
          onBlur={handleBlur}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          startAdornment={
            <InputAdornment aria-label="Password Icon" position="start">
              <LockOpenIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Change Type Password"
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
