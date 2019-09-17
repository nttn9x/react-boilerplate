import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { ROUTES } from "../../constants/navigation";

const Fields = lazy(() =>
  import("../../pages/private/fields/fields.container")
);

const Users = lazy(() => import("../../pages/private/users/users.container"));

const Dashboard = lazy(() =>
  import("../../pages/private/dashboard/dashboard.container")
);

const routes: RouteProps[] = [
  {
    exact: true,
    path: ROUTES.Dashboard,
    component: Dashboard
  },
  {
    exact: true,
    path: ROUTES.Fields,
    component: Fields
  },
  {
    exact: true,
    path: ROUTES.Users,
    component: Users
  }
];

export default routes;
