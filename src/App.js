import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
const Home = lazy(() => import("./UserScreens/Home/Home"));
const Login = lazy(() => import("./UserScreens/OnBoarding/Login/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="AppLogo">loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
