import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { GlobalContextProvider } from "./globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
