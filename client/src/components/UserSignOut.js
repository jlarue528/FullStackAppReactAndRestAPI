import { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default(props) => {
    
    /*
        * This function will sign a user out
        * and will redirect them to courses page
    */
    useEffect(() => {
        props.context.actions.signOut();
    }, [props.context.actions])
    
    let history = useHistory();
    history.push('/');
 
    return <Redirect to="/"/>
}
