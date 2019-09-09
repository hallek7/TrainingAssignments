import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from "./Components/contact";
import About from "./Components/about";
import Project from "./Components/project";
import Home from "./Components/home";
import NotFound from './Components/notfound';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <ul>
                <li> <Link to="/home"> Home</Link> </li>
                <li> <Link to="about"> About</Link> </li>
                <li> <Link to="contact"> Contact</Link> </li>
                <li> <Link to="project"> Projects</Link> </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/project" component={Project} />
                <Route component = {NotFound} /> 
            </Switch>
        </div>

    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
