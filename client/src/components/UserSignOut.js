import { useHistory } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default(props) => {
    props.context.actions.signOut();
    
    let history = useHistory();
    history.push('/signin');
}
