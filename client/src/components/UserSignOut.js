import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default(props) => {
    
    useEffect(() => {
        props.context.actions.signOut();
    }, [props.context.actions])
    
    let history = useHistory();
    history.push('/signin');
    return null;
}
