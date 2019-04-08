import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Test from "./test"

export default() => {
    return(
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/test" component={Test} />
        </Router>
    );
}
