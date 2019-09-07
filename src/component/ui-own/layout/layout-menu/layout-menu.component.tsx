import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "../../../ui-libraries/icon-button";
import Menu from "../../../ui-libraries/menu";
import MenuItem from "../../../ui-libraries/menu-item";
import MenuIcon from "../../../ui-libraries/icons/menu";

const LayoutMenu: React.FC = ({ children }) => {
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
        <Link to="/">
          <MenuItem>Todo</MenuItem>
        </Link>
        <Link to="/page2">
          <MenuItem>page2</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default LayoutMenu;
