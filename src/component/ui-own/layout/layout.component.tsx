import React from "react";
import PropTypes from "prop-types";
import style from "./layout.module.scss";


import LayoutHeaderComponent from "./layout-header.component";

import { validAuth } from "../../../utils/auth";

import classnames from "classnames";

const Layout: React.FC = ({ children }) => {
  const isAuth = validAuth();

  return (
    <>z
      <LayoutHeaderComponent isAuth={isAuth} />
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
