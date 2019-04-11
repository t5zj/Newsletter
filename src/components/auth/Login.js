import React, {Component} from 'react';
import '../../css/App.css';
// using ES6 modules
import {Link} from "react-router-dom";


class Login extends Component {
    render() {
        return (<div className="Login">
                <header className="App-header">
                    <h1>Login</h1>
                    <p>
                        Enter your credentials to login.
                    </p>
                    <Link to={'/'}>Back</Link>

                </header>

            </div>
        );
    }
}

export default Login;
