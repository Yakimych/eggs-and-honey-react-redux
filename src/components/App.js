// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';
import './App.css';

class App extends Component<*> {
  render() {
    return (
      <div className="App bg-light">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content container">
            <Route path="/" exact component={UserPage} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
