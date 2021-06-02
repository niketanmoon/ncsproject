/*
 * Route component handle routing in project
 * */

import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoaderComponent from "../components/Loaders/Loader";
import ErrorBoundry from "../components/ErrorBoundary";
import { RoutesPath } from "./RoutesComponent";
import PrivateRoute from "./PrivateRoutes";

const Header = lazy(() => import("../container/Header"));

const Routes = (props) => (
  <Router>
    <ErrorBoundry>
      <Suspense fallback={<LoaderComponent />}>
        <Header />
        <div className="content">
          <Switch>
            {RoutesPath.map((itm) =>
              itm.private ? (
                <PrivateRoute
                  exact
                  path={itm.path}
                  key={itm.path}
                  component={itm.component}
                />
              ) : (
                <Route
                  exact
                  path={itm.path}
                  key={itm.path}
                  component={itm.component}
                />
              )
            )}
            <Redirect to="/404" />
          </Switch>
        </div>
        {/*<Footer/>*/}
      </Suspense>
    </ErrorBoundry>
  </Router>
);

export default Routes;
