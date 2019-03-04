import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "Client";
import Header from "Components/Header";
import Home from "Pages/Home";
import SearchResult from "Pages/SearchResult";
import Login from "Pages/Login";
import SingUp from "Pages/SignUp";
import Viewer from "Pages/Viewer";
import EditOrWrite from "Pages/EditOrWrite";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path={"/부경위키:대문"} component={Home} />
              <Route path={"/searchResult/:name"} component={SearchResult} />
              <Route path={"/login"} component={Login} />
              <Route path={"/signUp"} component={SingUp} />
              <Route path={"/contents/:id"} component={Viewer} />
              <Route path={"/edit/:id"} component={EditOrWrite} />
              <Route path={"/write"} component={EditOrWrite} />
            </Switch>
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
    </Fragment>
  );
};

export default App;
