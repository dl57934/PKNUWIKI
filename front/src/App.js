import React, { Component, Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Pages/Home";
import SearchResult from "Pages/SearchResult";
import Login from "Pages/Login";
import SingUp from "Pages/SignUp";

const App = () => {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/부경위키:대문"} component={Home} />
          <Route path={"/searchResult/:name"} component={SearchResult} />
          <Route path={"/login"} component={Login} />
          <Route path={"/signUp"} component={SingUp} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
