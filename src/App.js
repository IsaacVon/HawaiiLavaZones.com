import React from "react";
import Home from "./pages/home";
import Nav from "./components/navBar";
import LavaZoneInformation from "./pages/lavaZoneInformation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LavaZoneInformation" component={LavaZoneInformation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
