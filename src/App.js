import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

// Common
import Home from "./pages/desktop/homeDesktop";
import CheckAddress from "./pages/desktop/checkAddressDesktop";
import Contact from "./pages/desktop/contactDesktop";
import Nav from "./components/desktop/nav";

// Desktop
import ZoneInformationDesktop from "./pages/desktop/zoneInfoDesktop";
import NotFoundDesktop from "./pages/desktop/notFoundDesktop";

// Mobile
import ZoneInfoMobile from "./pages/mobile/zoneInfoMobile";
import NotFoundMobile from "./pages/mobile/notFoundMobile";

import "./App.css";

function App() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight / 100}px`
  );
  console.log("isMobile", isMobile);
  if (!isMobile) {
    return (
      <Router>
        <div className="desktopApp">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" component={CheckAddress} />
            <Route path="/ZoneInformation" component={ZoneInformationDesktop} />
            <Route path="/Contact" component={Contact} />
            <Route path="/*" component={NotFoundDesktop} />
          </Switch>
          <Nav />
        </div>
      </Router>
    );
  }
  if (isMobile) {
    return (
      <Router>
        <div className="searchWrapperMobile">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" component={CheckAddress} />
            <Route path="/ZoneInformation" component={ZoneInfoMobile} />
            <Route path="/Contact" component={Contact} />
            <Route path="/*" component={NotFoundMobile} />
          </Switch>
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
