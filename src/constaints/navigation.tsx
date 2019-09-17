export enum ROUTES {
  Dashboard = "/",
  Customers = "/customers",
  Orders = "/orders",
  Products = "/products",
  Offers = "/offers"
}

export const SIDE_BAR = [
  {
    keyi18n: "dashboard",
    linkTo: ROUTES.Dashboard
  },
  {
    keyi18n: "customers",
    linkTo: ROUTES.Customers
  },
  {
    keyi18n: "orders",
    linkTo: ROUTES.Orders
  },
  {
    keyi18n: "offers",
    linkTo: ROUTES.Offers
  }
];
