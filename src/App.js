import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Passengers from "./components/Passengers";
import Passenger from "./components/Passenger";
import EditPassenger from "./components/EditPassenger";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/passengers" component={Passengers} />
          <Route exact path="/passenger/:passengerId" component={Passenger} />
          <Route
            exact
            path="/passenger/:passengerId/edit"
            component={EditPassenger}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
