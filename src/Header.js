import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-search">
        <label> Search </label>
        <input type="text" id="search" />
        <button type="submit"> GO!</button>
      </div>
      <div className="header-buttons">
        <Link to="/cart">
          <button type="submit"> Cart </button>
        </Link>
        <Link to="/home">
          <button type="submit"> Home </button>
        </Link>
        <Link to="/account">
          <button type="submit"> My Account </button>
        </Link>
        <Link to="/">
          <button type="submit"> Log out </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
