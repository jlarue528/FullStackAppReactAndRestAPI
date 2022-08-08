import { NavLink, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Form from './Form';

export default class UserSignIn extends Component {

    state = {
        emailAddress: '',
        password: '',
        errors: [],
    };

    submit = () => {
        const { context } = this.props;
        const {
            emailAddress,
            password,
        } = this.state

        context.actions.signIn(emailAddress, password)
            .then(user => {
                if(user === null) {
                    this.setState(() => {
                        return{ errors: ['Sign-in was unsuccessful']}
                    });
                    console.log('errors occurred');
                } else {
                    this.props.history.push('/')
                    console.log('Success, you are signed in!');
                }
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/error')
            })
    }

    cancel = () => {
        console.log('cancel');
        this.props.history.push("/");
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
        const {
            emailAddress,
            password,
            errors,
          } = this.state;

          console.log(this.props);
            
          return (
            <div className="form--centered">
            <h2>Sign In</h2>
            <Form
                cancel={this.cancel}
                errors={errors}
                submit={this.submit}
                submitButtonText="Sign In"
                elements={() => (
                    <React.Fragment>
                        <label htmlFor="emailAddress">
                            Email Address
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="text"
                                onChange={this.handleChange}
                                value={emailAddress} />
                            </label>
                        <label htmlFor="password">
                            Password
                            <input
                            id="password"
                            name="password"
                            type="text"
                            onChange={this.handleChange} 
                            value={password} />
                        </label>
                    </React.Fragment>
                )}/>
            <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
    </div>
    )};
};
