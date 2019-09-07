import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicTypeRoute from "./public/public.type.route";
import PrivateTypeRoute from "./private/private.type.route";

import LayoutComponent from "../component/ui-own/layout/layout.component";
import LoadingComponent from "../component/ui-own/progress/loader/loader.component";

const Root: React.FC = () => {
  return (
    <Router>
      <LayoutComponent>
        <Suspense fallback={<LoadingComponent />}>
          <PublicTypeRoute />
          <PrivateTypeRoute />
        </Suspense>
      </LayoutComponent>
    </Router>
  );
};

export default Root;
