import React, { useState, useEffect, Redirect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Axios = require('axios');

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allUsername, setAllUsername] = useState([]);
  const [allPasswords, setAllPasswords] = useState([]);

  const goHome = () => {
    return <Redirect to="/home" />;
  };
  const wrongPassword = () => {
    console.log('wrong password');
  };
  const signUp = () => {
    Axios.get('http://localhost:3001/api/get/users').then((response) => {
      setAllUsername(response.data);
      console.log(allUsername);
    });

    if (allUsername.includes(username)) {
      console.log('Username already exists!');
    } else {
      Axios.post('http://localhost:3001/api/signup', {
        username: username,
        password: password,
      });
      //goHome();
    }
  };

  const checkLogin = () => {
    Axios.get('http://localhost:3001/api/get/users').then((response) => {
      setAllUsername(response.data);
      console.log('awe1');
    });
    Axios.get('http://localhost:3001/api/get/passwords').then((response) => {
      setAllPasswords(response.data);
    });
    for (let i = 0; i < allUsername.length; i++) {
      console.log(allUsername[i]);
      if (allUsername[i] == username && allPasswords[i] == password) {
        //goHome();
        Axios.get('http://localhost:3001/');
        break;
      }
    }
    console.log('ok awe');
  };
  return (
    <div>
      <h1> login</h1>
      <form inputMode="text">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>{' '}
        <br></br>
        <label for="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={checkLogin}>Log in!</button>
      </form>

      <h1> Sign up </h1>
      <form inputMode="text">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>{' '}
        <br></br>
        <label for="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit" onClick={signUp}>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default Login;
