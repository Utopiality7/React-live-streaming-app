import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";

import routesList from "./data";

const Routes = () => {
  const routes = useRoutes(routesList);

  return (
    <Fragment>
      <div className="grid-x grid-padding-x grid-padding-y">{routes}</div>
    </Fragment>
  );
};

export default Routes;
