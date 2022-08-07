/* eslint-disable import/no-anonymous-default-export */
import React, { Component, useContext }  from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import { Consumer } from './Context';


export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Outlet
          {...rest}
            element={props => context.authenticatedUser ? (
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

