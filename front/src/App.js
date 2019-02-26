import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/부경위키:대문"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
