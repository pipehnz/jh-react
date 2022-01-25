import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from '../SignUp';
import Login from '../Login';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <Router>
          <Switch>
            <Route path="/sign_up">
              <SignUp />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Home;
