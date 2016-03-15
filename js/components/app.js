import React from "react";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/twits">Twits</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

module.exports = App;