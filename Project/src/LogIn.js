import React from 'react';
// import axios from 'axios';
// import validator from 'validator';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('log-in');
const root = ReactDom.createRoot(domNode);

class Signin extends React.Component {
    constructor(props) {

        super(props);
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
    
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
        this.state = {
    
          email:'',
    
          password:''
    
        };
    
    }
    
    render() {

        return (

      	<form className="form-signin">

                <h2 className="form-signin-heading"> Please sign in </h2>

                <label for="inputEmail" className="sr-only"> Email address

                </label>

                <label for="inputEmail" className="sr-only">Email address</label>

            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />

            <label for="inputPassword" className="sr-only">Password</label>

            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />


            <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>


            </form>

        )

    }

    handleEmailChange(e){

        this.setState({email:e.target.value})
    
    }
    
    handlePasswordChange(e){
    
        this.setState({password:e.target.value})
    
    }

    signIn(){

        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);            
    
    }
    
    

}

root.render(e(Signin));

console.log('11')