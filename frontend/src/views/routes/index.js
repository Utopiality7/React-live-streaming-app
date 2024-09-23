import React from "react";
import { useRoutes } from "react-router-dom";

import routesList from "./data";

const Routes = () => {
  const routes = useRoutes(routesList);

  return (
    <div className="grid-x grid-padding-x grid-padding-y">
      <div className="cell">{routes}</div>
    </div>
  );
};

export default Routes;
