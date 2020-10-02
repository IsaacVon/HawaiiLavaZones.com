import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

// Desktop
import NavBarDesktop from "./components/desktop/navBarDesktop";
import HomeDesktop from "./pages/desktop/homeDesktop";
import CheckAddressDesktop from "./pages/desktop/checkAddressDesktop";
import ZoneInformationDesktop from "./pages/desktop/zoneInfoDesktop";
import ContactDesktop from "./pages/desktop/contactDesktop";
import NotFoundDesktop from "./pages/desktop/notFoundDesktop";

// Mobile
import NavBarMobile from "./components/mobile/navBarMobile";
import HomeMobile from "./pages/mobile/homeMobile";
import CheckAddressMobile from "./pages/mobile/checkAddressMobile";
import ZoneInfoMobile from "./pages/mobile/zoneInfoMobile";
import ContactMobile from "./pages/mobile/contactMobile";
import NotFoundMobile from "./pages/mobile/notFoundMobile";

import "./App.css";

function App() {
  if (!isMobile) {
    return (
      <Router>
        <div className="desktopApp">
          <NavBarDesktop />
          <Switch>
            <Route path="/" exact component={HomeDesktop} />
            <Route path="/Search" component={CheckAddressDesktop} />
            <Route path="/ZoneInformation" component={ZoneInformationDesktop} />
            <Route path="/Contact" component={ContactDesktop} />
            <Route path="/*" component={NotFoundDesktop} />
          </Switch>
        </div>
      </Router>
    );
  }
  if (isMobile) {
    return (
      <Router>
        <div className="searchWrapperMobile">
          <Switch>
            <Route path="/" exact component={HomeMobile} />
            <Route path="/Search" component={CheckAddressMobile} />
            <Route path="/ZoneInformation" component={ZoneInfoMobile} />
            <Route path="/Contact" component={ContactMobile} />
            <Route path="/*" component={NotFoundMobile} />
          </Switch>
          <NavBarMobile />
        </div>
      </Router>
    );
  }
}

export default App;
