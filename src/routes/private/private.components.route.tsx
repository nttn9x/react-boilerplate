import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { ROUTES } from "../../constaints/navigation";

const Orders = lazy(() =>
  import("../../pages/private/orders/orders.container")
);
const Customers = lazy(() =>
  import("../../pages/private/customers/customers.container")
);
const Offers = lazy(() =>
  import("../../pages/private/offers/offers.container")
);
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
    path: ROUTES.Customers,
    component: Customers
  },
  {
    exact: true,
    path: ROUTES.Orders,
    component: Orders
  },
  {
    exact: true,
    path: ROUTES.Offers,
    component: Offers
  }
];

export default routes;
