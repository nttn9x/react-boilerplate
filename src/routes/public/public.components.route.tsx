import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Login = lazy(() => import("../../pages/public/login/login.container"));

const routes: RouteProps[] = [
  {
    exact: true,
    path: "/login",
    component: Login
  }
];

export default routes;
