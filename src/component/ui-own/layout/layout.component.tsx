import React from "react";
import PropTypes from "prop-types";
import style from "./layout.module.scss";

import AppBar from "../../ui-libraries/app-bar";
import Toolbar from "../../ui-libraries/tool-bar";
import Typography from "../../ui-libraries/typography";

import MenuComponent from "./layout-menu/layout-menu.component";
import LanguageComponent from "../language/language.component";

import { validAuth } from "../../../utils/auth";

import classnames from "classnames";

import { useTranslation } from "react-i18next";

const Layout: React.FC = ({ children }) => {
  const isAuth = validAuth();
  const { t } = useTranslation(["common"]);
  return (
    <>
      {isAuth && (
        <AppBar>
          <Toolbar>
            <MenuComponent />
            <Typography variant="h6" className={style.header__title}>
              {t("app_name")}
            </Typography>
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
