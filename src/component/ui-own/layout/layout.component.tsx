import React from "react";
import PropTypes from "prop-types";
import style from "./layout.module.scss";
import { Link } from "react-router-dom";

import AppBar from "../../ui-libraries/app-bar";
import Toolbar from "../../ui-libraries/tool-bar";
import IconButton from "../../ui-libraries/icon-button";
import MenuIcon from "../../ui-libraries/icons/menu";

import LanguageComponent from "../language/language.component";

import { useGlobalStore } from "../../../store";

import classnames from "classnames";

const Layout: React.FC = ({ children }) => {
  const {
    state: {
      auth: { isAuth }
    }
  } = useGlobalStore();

  return (
    <>
      {isAuth && (
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div className={style.header__title}>
              <Link to="/">Todo</Link>|<Link to="/page2">Page 2</Link>|
              <Link to="/login">login</Link>
            </div>

            <LanguageComponent />
          </Toolbar>
        </AppBar>
      )}
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
