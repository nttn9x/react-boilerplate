import React from "react";
import { Route, Redirect } from "react-router-dom";

import ListPublicRoutes from "./private.components.route";

import { useGlobalStore } from "../../store";

const withAuth = (Component: any) => (props: any) => {
  const { state } = useGlobalStore();
  
  if (!state.auth.isAuth) {
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
