import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Banner from './Banner';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [{ searching }, dispatch] = useStateValue();
  useEffect(() => {
    if (searching.s_value == false) {
      Axios.get('http://localhost:3001/api/get').then((response) => {
        setAllProducts(response.data);
      });
    }
  });
  return (
    <div>
      {' '}
      <Header />
      <Banner />
      <div className="home-products">
        {allProducts.map((val) => {
          return (
            <Product
              name={val.P_Name}
              desc={val.P_Desc}
              seller={val.Seller}
              price={val.Price}
              img={val.Image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
