import React from "react";
import Nav from "./components/navBar";
import Home from "./pages/home";
import Search from "./pages/search";
import ZoneInformation from "./pages/zoneInfo";
import Contact from "./pages/contact";
import ThankYou from "./pages/thankyou";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/ZoneInformation" component={ZoneInformation} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Submitted" component={ThankYou} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
