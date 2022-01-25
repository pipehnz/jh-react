import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import CustomRoute from 'components/CustomRoute';
import Home from 'screens/Home';
import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import 'scss/application.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <CustomRoute exact path="/home" isPrivate redirectTo="/">
            <Home />
          </CustomRoute>
          <CustomRoute exact path="/sign_up" isPrivate={false} redirectTo="/home">
            <SignUp />
          </CustomRoute>
          <CustomRoute exact path="/" isPrivate={false} redirectTo="/home">
            <Login />
          </CustomRoute>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
