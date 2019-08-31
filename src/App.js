import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Tradeshows from "./pages/Tradeshows";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Architecture" component={Architecture} />
          <Route exact path="/Tradeshows" component={Tradeshows} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
