import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IPrivateRoute {
  auth: boolean;
  path: string;
  component: () => JSX.Element;
}

export function PrivateRoute({
  component: Component,
  auth,
  ...rest
}: IPrivateRoute) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        auth === true ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
