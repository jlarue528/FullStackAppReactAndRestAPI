import React, { Component } from 'react';
import Data from './Data';
// import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        authenticatedUser: null,
        password: " "
    }

    constructor() {
        super();
        this.data = new Data();
    }

    render() {
        const { authenticatedUser } = this.state;

        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            }
        };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }

    signIn = async (emailAddress, password) => {
        const user = await this.data.getUserData(emailAddress, password);
        user.password = password;

        if(user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user,
                    password: password
                };
            });
        }
        return(user);
    }
    
    signOut = async () => {
        this.setState(() => {
            return {
                authenticatedUser: null
            }
        });
    }
}

export const Consumer = Context.Consumer;

export default function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        )
    }
}