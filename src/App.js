import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome'
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={() => <><Register /><Login /></>} />
      <PrivateRoute exact path='/welcome' component={Welcome} />
    </div>
  );
}

export default App;
