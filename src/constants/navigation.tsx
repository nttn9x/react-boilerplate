import React from "react";

import DashboardIcon from "../component/ui-libraries/icons/dashboard";
import TextFieldsIcon from "../component/ui-libraries/icons/text-fields";
import GroupIcon from "../component/ui-libraries/icons/group";

export enum ROUTES {
  Dashboard = "/",
  Users = "/users",
  Fields = "/fields"
}

export const SIDE_BAR = [
  {
    keyi18n: "dashboard",
    linkTo: ROUTES.Dashboard,
    icon: <DashboardIcon />
  },
  {
    keyi18n: "users",
    linkTo: ROUTES.Users,
    icon: <GroupIcon />
  },
  {
    keyi18n: "fields",
    linkTo: ROUTES.Fields,
    icon: <TextFieldsIcon />
  }
];
