import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
const Home = lazy(() => import("./UserScreens/Home/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="AppLogo">loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
