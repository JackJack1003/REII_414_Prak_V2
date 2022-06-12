import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';
const Axios = require('axios');

function Header() {
  const [{ searching }, dispatch] = useStateValue();
  const toetsAxios = () => {
    console.log('clicked!');
    Axios.get('http://localhost:3001/api/get/toets').then(function (response) {
      if (response.data === 'yee') {
        console.log(response.data);
      }
    });
  };
  const h_searching = async (mysearch_tag) => {
    //console.log(mysearch_tag);
    if (mysearch_tag != '') {
      //searching = true;

      // dispatch({
      //   type: 'no_search',
      //   item: {
      //     s_value: true,
      //   },
      // });

      const search_tag = '';
      Axios.post('http://localhost:3001/api/search', {
        search_tag: mysearch_tag,
      }).then(function (response) {
        console.log(response.data);
      });
    }
  };

  return (
    <div className="header">
      <div className="header-search">
        <label> Search </label>
        <input
          type="text"
          id="search"
          onChange={(e) => {
            h_searching(e.target.value);
          }}
        />
        <button type="submit" onClick={toetsAxios}>
          GO!
        </button>
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
