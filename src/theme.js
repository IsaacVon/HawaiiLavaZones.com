import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({

  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      warning: "green",
    },

    primary: {
      main: "#F4B950", // Orange
      
    },
    secondary: {
      main: "#9C2A00",
    },
  },
});

export default theme;
