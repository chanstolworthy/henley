import React from "react";
import {Route, Switch} from "react-router-dom";
import About from '../components/views/About/About'
import Portfolio from '../components/views/Portfolio/Portfolio'

const appRouter = () => (
        <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/work' component={Portfolio}/>
        </Switch>
)

export default appRouter