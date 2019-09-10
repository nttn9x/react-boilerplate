import React from "react";
import { Route, Redirect } from "react-router-dom";

import ListPublicRoutes from "./private.components.route";

import LayoutComponent from "../../component/ui-own/layout/layout.component";

import { validAuth } from "../../utils/auth";

const PrivateComponents: React.FC = props => (
  <LayoutComponent>
    {ListPublicRoutes.map(({ component, ...rest }: any, i) => (
      <Route key={i} {...rest} {...props} component={component} />
    ))}
  </LayoutComponent>
);

const PrivateRoute: React.FC = () => (
  <Route
    path="/"
    render={(props: any) => {
      const isAuth = validAuth();

      if (!isAuth) {
        return (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }

      return <PrivateComponents {...props} />;
    }}
  />
);

export default PrivateRoute;
