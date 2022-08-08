import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default({ context }) => {
  
    useEffect( () => {
        context.actions.signOut();
    });
    
    let history = useHistory();
    history.push('/signin');
}
