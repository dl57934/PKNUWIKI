import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Header />
  </Fragment>,
  document.getElementById("header")
);
ReactDOM.render(<App />, document.getElementById("root"));
