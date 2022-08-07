import React, { Component } from 'react';
import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        authenticatedUser: null
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
        if(user !== null) {
            this.setState(() => {
                return {
                    authenticatedUser: user
                };
            });
        }
        return(user);
    }
    
    signOut = async () => {
        this.setState({authenticatedUser: null});
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