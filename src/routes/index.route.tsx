import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicTypeRoute from "./public/public.type.route";
import PrivateTypeRoute from "./private/private.type.route";

import LoadingComponent from "../component/ui-own/progress/loader/loader.component";
import LayoutComponent from "../component/ui-own/layout/layout.component";

import AuthProvider from "../context/auth.context";

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <LayoutComponent>
          <Suspense fallback={<LoadingComponent />}>
            <PublicTypeRoute />
            <PrivateTypeRoute />
          </Suspense>
        </LayoutComponent>
      </Router>
    </AuthProvider>
  );
};

export default Root;
