import React, { Component } from 'react';
export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You have been Successfully LogOut  </h1>
            </div>
        )
    }
}
