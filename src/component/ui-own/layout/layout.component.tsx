import React, { useMemo } from "react";
import PropTypes from "prop-types";
import style from "./layout.module.scss";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import primaryColor from "@material-ui/core/colors/deepPurple";
import secondaryColor from "@material-ui/core/colors/blue";

import LayoutHeaderComponent from "./layout-header.component";

import { useAuthDataContext } from "../../../context/auth.context";

import classnames from "classnames";

const Layout: React.FC = ({ children }) => {
  const { isAuth, onLogout } = useAuthDataContext();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isAuth ? "dark" : "light",
          primary: primaryColor,
          secondary: secondaryColor
        }
      }),
    [isAuth]
  );
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutHeaderComponent isAuth={isAuth} onLogout={onLogout} />
      <div
        className={classnames(style.body, {
          [style["body--not-login"]]: !isAuth,
          [style["body--has-login"]]: isAuth
        })}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
