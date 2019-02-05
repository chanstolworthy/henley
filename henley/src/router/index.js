import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import About from '../components/views/About/About'
import Portfolio from '../components/views/Portfolio/Portfolio'

const appRouter = () => (
    <Router>
        <div>
            <Route path='/about' component={About}/>
            <Route path='/work' component={Portfolio}/>
        </div>
    </Router>
)

export default appRouter