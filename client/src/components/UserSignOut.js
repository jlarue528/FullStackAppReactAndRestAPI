import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default({ context }) => {
  
    useEffect( () => {
        context.actions.signOut();
    });
    
    let navigate = useNavigate();
    navigate('/signin');
}
