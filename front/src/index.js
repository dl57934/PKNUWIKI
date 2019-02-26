import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import BackgroundView from "./Components/BackgroundView";

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Header />
  </Fragment>,
  document.getElementById("header")
);
ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);
