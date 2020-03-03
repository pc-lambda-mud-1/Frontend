import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome'
import Chat from './components/Chat';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={() => <><Register /><Login /></>} />
      <Route path='/chat' component={Chat} />
      <PrivateRoute exact path='/welcome' component={Welcome} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
