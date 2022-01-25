import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isLogged } from '../../services/UsersService';

type Props = {
  redirectTo: string;
  isPrivate: boolean;
} & RouteProps;

function CustomRoute({ children, redirectTo, isPrivate, ...rest }: Props) {
  const isActive = () => {
    if ((isLogged() && isPrivate) || (!isLogged() && !isPrivate)) {
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isActive() ? children : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
      }
    />
  );
}

export default CustomRoute;
