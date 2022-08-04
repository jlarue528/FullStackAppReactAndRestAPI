import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class UserSignIn extends Component {

    state = {
        courses: []
    };

  render() {
    
    return (
        <div class="form--centered">
                <h2>Sign In</h2>
                
                <form>
                    <label for="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" value=""></input>
                    {/* <button class="button" type="submit">Sign In</button><Link to="/"><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></Link> */}
                    <button class="button" type="submit">Sign In</button><Link to="/api/courses"><button class="button button-secondary" onclick="event.preventDefault();">Cancel</button></Link>
                </form>
                <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
        </div>
    )};
};