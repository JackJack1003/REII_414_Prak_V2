import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner'; 

function Home() {
  return (
    <div>
      {' '}
      <Header />
      <Banner/> 
      <h1> home</h1>
    </div>
  );
}

export default Home;
