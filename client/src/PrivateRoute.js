/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { Consumer } from './Context';


export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
            component={props => context.authenticatedUser ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to='/signin'/>
                )
            }
        />
    )}
    </Consumer>
  );
};

