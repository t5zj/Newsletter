import React, {Component} from 'react';
import '../css/App.css';
// using ES6 modules
import {Link} from "react-router-dom";


class App extends Component {
    render() {
        return (<div className="App">
                <header className="App-header">
                    <h1>Newsletter</h1>
                    <p>
                        Welcome to this amazing Newsletter service.
                    </p>
                    <Link to={'registration'}>Register</Link>
                    <Link to={'login'}>Login</Link>
                </header>

            </div>
        );
    }
}

export default App;
