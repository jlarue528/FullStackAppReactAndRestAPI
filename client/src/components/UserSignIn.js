import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class UserSignIn extends Component {

    state = {
        courses: []
    };

    submitSignIn = () => {

    }

  render() {
    
    return (
        <div className="form--centered">
                <h2>Sign In</h2>
                
                <form>
                    <label for="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" value=""></input>
                    <button className="button" type="submit">Sign In</button><Link to="/api/courses"><button className="button button-secondary" onClick={this.props.clickCancel}>Cancel</button></Link>
                </form>
                <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
        </div>
    )};
};