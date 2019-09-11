import React from "react";
import { Route, Redirect } from "react-router-dom";

import ListPublicRoutes from "./private.components.route";

import { useAuthDataContext } from "../../context/auth.context";

const withAuth = (Component: any) => (props: any) => {
  const { isAuth } = useAuthDataContext();

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

const PrivateRoute: React.FC = props => (
  <>
    {ListPublicRoutes.map(({ component, ...rest }: any, i) => (
      <Route key={i} {...rest} {...props} component={withAuth(component)} />
    ))}
  </>
);

export default PrivateRoute;
