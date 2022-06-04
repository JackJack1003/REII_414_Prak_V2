import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Cart from './cart';
import Account from './Account';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/account" element={<Account />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
