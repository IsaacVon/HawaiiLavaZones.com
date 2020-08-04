import React from "react";
import Nav from "./components/navBar";
import Home from "./pages/home";
import CheckAddress from "./pages/checkAddress";
import ZoneInformation from "./pages/zoneInfo";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={CheckAddress} />
          <Route path="/ZoneInformation" component={ZoneInformation} />
          <Route path="/Contact" component={Contact} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
