import React from "react";
import { Route, Redirect } from "react-router-dom";

import ListPublicRoutes from "./private.components.route";

import { validAuth } from "../../utils/auth";

const withAuth = (Component: any) => (props: any) => {
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

  return <Component {...props} />;
};

const PrivateRoute: React.FC = () => (
  <>
    {ListPublicRoutes.map(({ component, ...rest }: any, i) => (
      <Route key={i} {...rest} component={withAuth(component)} />
    ))}
  </>
);

export default PrivateRoute;
