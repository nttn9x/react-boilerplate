import React from "react";

import Fab from "../../../component/ui-libraries/fab";

interface ILoginButtonProps {
  label: any;
}

const LoginButton: React.SFC<ILoginButtonProps> = React.memo(
  function LoginButton({ label }) {
    return (
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Login"
        type="submit"
      >
        {label}
      </Fab>
    );
  }
);

export default LoginButton;
