import React from "react";
import { Route, Switch } from "react-router-dom";
import Start from "./Start";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Start" render={() => <Start />} />
        <Route path="/About" render={() => <About />} />
        <Route path="/Search" render={() => <Search />} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
