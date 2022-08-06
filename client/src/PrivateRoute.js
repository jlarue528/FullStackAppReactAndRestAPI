/* eslint-disable import/no-anonymous-default-export */
import React  from 'react';
import { Route, Navigate} from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
            render={props => context.authenticatedUser ? (
                    <Component {...props}/>
                ) : (
                <Navigate to='/signin'/>
                )
            }
        />
    )}
    </Consumer>
  );
};