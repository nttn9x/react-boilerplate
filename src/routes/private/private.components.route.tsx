import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Todo = lazy(() =>
  import("../../pages/private/todo/container/todo.container")
);
const Page2 = lazy(() => import("../../pages/private/page2/page2.container"));
const Settings = lazy(() =>
  import("../../pages/private/settings/settings.container")
);

const routes: RouteProps[] = [
  {
    exact: true,
    path: "/",
    component: Todo
  },
  {
    exact: true,
    path: "/page2",
    component: Page2
  },
  {
    exact: true,
    path: "/settings",
    component: Settings
  }
];

export default routes;
