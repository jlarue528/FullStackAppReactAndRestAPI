import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    };

    async createUser(user) {
        console.log(this.props);
        const response = await this.props.api('/users', 'POST', user);
        if (response.status === 201) {
          return [];
        }
        else if (response.status === 400) {
          return response.json().then(data => {
            return data.errors;
          });
        }
        else {
          throw new Error();
        }
    }

    submit () {
        const {
            firstName,
            lastName,
            emailAddress,
            password
        } = this.state

        //new user payload
        const user = {
            firstName,
            lastName,
            emailAddress,
            password
        }

        (async () => {
            await this.createUser(user)
            .then(errors => {
                if(errors.length) {
                    this.setState({ errors });
                    console.log('errors occurred');
                } else {
                    console.log('user is successfully created.')
                }
            })
            .catch(err => {
                console.log(err);
            })
        })();
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
    }

    render() {
    
    return (
        <div className="form--centered">
                <h2>Sign Up</h2>
                
                <form onSubmit={this.submit}> 
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}></input>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value={this.state.emailAddress} onChange={this.handleChange}></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button className="button" type="submit">Sign Up</button><Link to="/api/courses"><button className="button button-secondary">Cancel</button></Link>
                </form>
                <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
        </div>
    )};
};