import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default({ context }) => {
    useEffect(() => context.actions.signOut());
    return(
        <Navigate to='/signin'/>
    );
}
