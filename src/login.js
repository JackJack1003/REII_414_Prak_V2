import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login() {
  const goHome = () => {};
  return (
    <div>
      <h1> login</h1>
      <form inputMode="text">
        <label for="username">Username:</label>
        <input type="text" id="username"></input> <br></br>
        <label for="password">Password:</label>
        <input type="text" id="password"></input>
        <br></br>
        <Link to="/home">
          {' '}
          <button type="submit" onClick={goHome}>
            {' '}
            Submit{' '}
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
