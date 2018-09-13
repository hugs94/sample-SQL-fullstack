import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Wardrobe from "./Wardrobe";
import NewItem from "./NewItem";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Wardrobe} />
          <Route path="/newitem" component={NewItem} />
        </Switch>
      </Router>
    );
  }
}

export default App;
