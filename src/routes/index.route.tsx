import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import primaryColor from "@material-ui/core/colors/deepPurple";
import secondaryColor from "@material-ui/core/colors/blue";

import PublicTypeRoute from "./public/public.type.route";
import PrivateTypeRoute from "./private/private.type.route";

import LoadingComponent from "../component/ui-own/progress/loader/loader.component";

const theme = createMuiTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor
  }
});

const Root: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <ThemeProvider theme={theme}>
          <PublicTypeRoute />
          <PrivateTypeRoute />
        </ThemeProvider>
      </Suspense>
    </Router>
  );
};

export default Root;
