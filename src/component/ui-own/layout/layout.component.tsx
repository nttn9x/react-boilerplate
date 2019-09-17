import React from "react";
import PropTypes from "prop-types";
import style from "./layout.module.scss";

import CssBaseline from "@material-ui/core/CssBaseline";

import LayoutHeaderComponent from "./layout-header.component";

import { useAuthDataContext } from "../../../context/auth.context";

import classnames from "classnames";

const Layout: React.FC = ({ children }) => {
  const { isAuth, onLogout } = useAuthDataContext();

  return (
    <>
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
