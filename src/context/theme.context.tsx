import React, { useMemo } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import primaryColor from "@material-ui/core/colors/deepPurple";
import secondaryColor from "@material-ui/core/colors/deepOrange";

const ThemesProvider = (props: any) => {
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: primaryColor,
          secondary: secondaryColor
        }
      }),
    []
  );

  return <ThemeProvider theme={theme} {...props} />;
};

export default ThemesProvider;
