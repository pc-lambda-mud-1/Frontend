
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Onboarding from "./components/Onboarding";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Onboarding} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
