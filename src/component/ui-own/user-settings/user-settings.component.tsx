import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "../../ui-libraries/icon-button";
import Avatar from "../../ui-libraries/avatar";
import Popover from "../../ui-libraries/popover";
import Menu from "../../ui-libraries/menu";
import MenuItem from "../../ui-libraries/menu-item";
import Icon from "../../ui-libraries/icon";
import ListItemIcon from "../../ui-libraries/list-item-icon";
import Typography from "../../ui-libraries/typography";

import { useTranslation } from "react-i18next";

interface IUserSettingsProps {
  classes: any;
  onLogout: Function;
}

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

const UserSettings: React.FC<IUserSettingsProps> = ({ classes, onLogout }) => {
  const classeOwns = useStyles();
  const { t } = useTranslation(["common"]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);

    onLogout();
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar className={classes.avatar}>H</Avatar>
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <Menu
          anchorEl={anchorEl}
          classes={{ paper: classeOwns.root }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Icon>exit_to_app</Icon>
            </ListItemIcon>
            <Typography variant="inherit"> {t("sign_out")}</Typography>
          </MenuItem>
        </Menu>
      </Popover>
    </>
  );
};

export default UserSettings;
