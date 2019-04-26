import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import {Link} from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <div className="Registration">
                <header className="App-header">
                    <h1>Registration</h1>
                    <form>
                        <p>Name: &nbsp;
                            <input id={"name"} type={"text"} placeholder={"name"}/></p>
                    </form>
                    <Link to={'/'}>Back</Link>

                </header>

            </div>

        );
    }
}

export default Registration;
