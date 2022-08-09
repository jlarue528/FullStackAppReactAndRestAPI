import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import Form from './Form'

export default class UserSignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    };

    /*
        * This function handles functionality
        * submitting the user sign up page:
        * 1. It will sign the user in
        * 2. It will authenticate the user
        * 3. It will redirect to courses page
    */
    submit = () => {
        const { context } = this.props;
        
        const {
            firstName,
            lastName,
            emailAddress,
            password
        } = this.state

        //new user data
        const user = {
            firstName,
            lastName,
            emailAddress,
            password
        }
        
        context.data.createUser(user)
            .then(errors => {
                if(errors.length) {
                    this.setState({ errors });
                    console.log('errors occurred');
                } else {
                    console.log('User is successfully created.')
                }
            })
            .catch(err => {
            console.log(err);
        });

        context.actions.signIn(this.context.authenticatedUser.username, this.context.authenticatedUser.password)
            .then(errors => {
                if(errors.length) {
                    this.setState({errors});
                } else {
                console.log('user successfully logged in')
                }
            })
            .catch(err => {
                console.log(err);
            })
        this.props.history.push("/");
    }

    /*
        * This function handles functionality
        * for the cancel button on the signup page.
        * It will redirect the user to the courses page.
    */
    cancel = () => {
        this.props.history.push('/');
    }

     /*
        * This function handles functionality
        * changing field values on the sign up page
        * based on user interaction.
    */
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
        
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
          } = this.state;

    console.log(this.state);
    return (
        <div className="form--centered">
                <h2>Sign Up</h2>
                        <Form
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Sign Up"
                            elements={() => (
                            <React.Fragment>
                                <label htmlFor="firstName">
                                    First Name
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={firstName} />
                                    </label>
                                <label htmlFor="lastName">
                                    Last Name
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={this.handleChange} 
                                        value={lastName} />
                                </label>

                                <label htmlFor="emailAddress">
                                    Email Address
                                    <input 
                                        id="emailAddress"
                                        name="emailAddress"
                                        type="text"
                                        onChange={this.handleChange} 
                                        value={emailAddress}/>
                                </label>
                          
                                <label htmlFor="password">
                                    Password
                                    < input 
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={password} />
                                </label> 
                            </React.Fragment>
                        )}/>
                    <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
            </div>
        )};
};