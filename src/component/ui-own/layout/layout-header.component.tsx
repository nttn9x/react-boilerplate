import React from "react";
import style from "./layout.module.scss";

import AppBar from "../../ui-libraries/app-bar";
import Toolbar from "../../ui-libraries/tool-bar";
import Typography from "../../ui-libraries/typography";

import MenuComponent from "./layout-menu/layout-menu.component";
import UserSettingsComponent from "../user-settings/user-settings.component";

import { useTranslation } from "react-i18next";

interface IProps {
  isAuth: boolean;
}

const LayoutHeader: React.FC<IProps> = ({ isAuth }) => {
  const { t } = useTranslation(["common"]);

  if (!isAuth) {
    return null;
  }
  return (
    <AppBar>
      <Toolbar>
        <MenuComponent />
        <Typography variant="h6" className={style.header__title}>
          {t("app_name")}
        </Typography>
        <UserSettingsComponent />
      </Toolbar>
    </AppBar>
  );
};

export default LayoutHeader;
