import React, { Fragment } from "react";
import NavigationHeader from "./views/navigations";
import Routes from "./views/routes";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <NavigationHeader />
      <Routes />
    </Fragment>
  );
};

export default App;
