import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'screens/Home/index';
import Login from 'screens/Login';
import SignUp from 'screens/SignUp';

import 'scss/application.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
