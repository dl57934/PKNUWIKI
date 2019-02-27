import React, { Component, Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Pages/Home";
import SearchResult from "Pages/SearchResult";

const App = () => {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/부경위키:대문"} component={Home} />
          <Route path={"/searchResult/:name"} component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
