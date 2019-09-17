import React, { useState } from "react";
import { withRouter } from "react-router";

import IconButton from "../../../ui-libraries/icon-button";
import Menu from "../../../ui-libraries/menu";
import MenuItem from "../../../ui-libraries/menu-item";
import ListItemIcon from "../../../ui-libraries/list-item-icon";
import MenuIcon from "../../../ui-libraries/icons/menu";

import { SIDE_BAR } from "../../../../constants/navigation";

import { useTranslation } from "react-i18next";

interface ILayoutMenuProps {
  history: any;
}

const LayoutMenu: React.FC<ILayoutMenuProps> = ({ history }) => {
  const { t } = useTranslation(["common"]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function doChangePage(event: React.MouseEvent<HTMLElement>) {
    try {
      const url = event.currentTarget.getAttribute("value");
      history.push(url);
    } catch (error) {
      console.log(error);
    }

    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        edge="start"
        color="primary"
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
          <MenuItem
            key={`lm_h_${e.linkTo}`}
            value={e.linkTo}
            onClick={doChangePage}
          >
            <ListItemIcon>{e.icon}</ListItemIcon>
            {t(e.keyi18n)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default withRouter(LayoutMenu);
