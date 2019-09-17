import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "../../../ui-libraries/icon-button";
import Menu from "../../../ui-libraries/menu";
import MenuItem from "../../../ui-libraries/menu-item";
import MenuIcon from "../../../ui-libraries/icons/menu";

import { SIDE_BAR } from "../../../../constaints/navigation";

import { useTranslation } from "react-i18next";

const LayoutMenu: React.FC = () => {
  const { t } = useTranslation(["common"]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {SIDE_BAR.map((e, i) => (
          <Link key={`lm-n-${i}`} to={e.linkTo}>
            <MenuItem>{t(e.keyi18n)}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default LayoutMenu;
