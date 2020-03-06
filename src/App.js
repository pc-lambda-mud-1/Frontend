import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome'
import Chat from './components/Chat/Chat';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Onboarding from "./components/Onboarding";
import Dashboard from './components/Dashboard';
import Maze from './components/Maze';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Onboarding} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/maze" component={Maze} />
    </div>
  );
}

export default App;
