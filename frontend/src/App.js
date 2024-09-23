import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import routesList from "./routes";
import "./App.css";

const App = () => {
  const routes = useRoutes(routesList);

  return (
    <Fragment>
      <h1>Header</h1>
      { routes }
    </Fragment>
  );
};

export default App;
