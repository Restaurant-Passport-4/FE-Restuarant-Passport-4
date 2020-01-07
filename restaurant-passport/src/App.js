import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//Functionality
import PrivateRoute from './components/PrivateRoute'
import { FoodieContext } from './contexts/foodiecontext';

//Component imports
import LogIn from './components/log_reg/login';
import Register from './components/log_reg/register';
import Dashboard from './components/menu/dashboard/dashboard';
import Profile from './components/menu/profile/profile';
import Passport from './components/menu/passport/passport';
import Settings from './components/menu/settings';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true: false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [passport, setPassport] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])
  return (
    <main>
      <FoodieContext.Provider value = {{loggedIn, setLoggedIn, user, setUser, profile, setProfile, restaurants, setRestaurants, passport, setPassport}}>
        <Switch>
          <Route exact path = "/" component = {LogIn} />
          <Route path = "/register" component = {Register} />
          <PrivateRoute path = "/dashboard" component = {Dashboard} />
          <Route path = "/profile" component = {Profile} />
          <Route path = "/passport" component = {Passport} />
          <Route path = "/settings" component = {Settings} />
        </Switch>
      </FoodieContext.Provider>
    </main>
  );
}

export default App;
