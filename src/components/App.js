// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';
import './App.css';

class App extends Component<void> {
  render() {
    return (
      <div className="App bg-light">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content container">
            <Route path="/" exact component={(props: ContextRouter) => (<UserPage {...props} />)} />
            <Route path="/admin" component={(props: ContextRouter) => (<AdminPage {...props} />)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
