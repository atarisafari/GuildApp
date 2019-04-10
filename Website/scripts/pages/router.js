import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import SignUP from "./signUp";

export default() => {
    return(
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/signUp" component={SignUP} />
        </Router>
    );
}
