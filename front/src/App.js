import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "Client";
import Header from "Components/Header";
import Home from "Pages/Home";
import SearchResult from "Pages/SearchResult";
import SignIn from "Pages/SignIn";
import SingUp from "Pages/SignUp";
import Viewer from "Pages/Viewer";
import EditOrWrite from "Pages/EditOrWrite";
import Bottom from "./Components/Bottom";

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
              <Route path={"/signIn"} component={SignIn} />
              <Route path={"/signUp"} component={SingUp} />
              <Route path={"/history/:contentName/:ver"} component={Viewer} />
              <Route path={"/contents/:contentName"} component={Viewer} />
              <Route path={"/edit/:contentName"} component={EditOrWrite} />
              <Route path={"/write/:contentName"} component={EditOrWrite} />
            </Switch>
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
      <Bottom />
    </Fragment>
  );
};

export default App;
