import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';

import Layout from 'containers/Layout';
import Quadcopter from 'containers/Quadcopter';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Layout} />
        <Route path="/categories/:id" component={Layout} />
        <Route path="/quadcopters/:id" component={Quadcopter} />
      </div>
    );
  }
}

export default App;
