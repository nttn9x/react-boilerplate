import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import AppBar from "../../ui-libraries/app-bar";
import Toolbar from "../../ui-libraries/tool-bar";
import IconButton from "../../ui-libraries/icon-button";
import MenuIcon from "../../ui-libraries/icons/menu";

import LanguageComponent from "../language/language.component";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={style.header__title}>
            <Link to="/">Todo</Link>
            <Link to="/page2">Page 2</Link>
          </div>

          <LanguageComponent />
        </Toolbar>
      </AppBar>

      <div className={style.body}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
