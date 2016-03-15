import React from "react";
import { render } from 'react-dom'
import Twits from "./components/twits";
import About from "./components/about";
import App from "./components/app";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="twits" component={Twits} />
    </Route>
  </Router>
), document.getElementById('react'))



