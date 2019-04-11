import React, { Component } from 'react';

import Registration from "../auth/Registration";
import App from "../App";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "../auth/Login";


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={App} />
                <Route path="/registration/" component={Registration} />
                <Route path="/login/" component={Login} />
            </BrowserRouter>
        );
    }
}

export default Routes;