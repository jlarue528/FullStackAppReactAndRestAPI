import { NavLink, useNavigate } from 'react-router-dom';

const UserSignIn = () => {

    const navigate = useNavigate();

    return (
        <div className="form--centered">
                <h2>Sign In</h2>
                
                <form>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" value=""></input>
                    <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={() => {navigate('/api/courses')}}>Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
        </div>
    )
};

export default UserSignIn;