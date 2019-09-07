import React from "react";

import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation(["common"]);

  return <header>{t("title_app")}</header>;
};
export default Header;
