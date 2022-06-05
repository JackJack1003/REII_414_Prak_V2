import React, { useState } from 'react';
import Header from './Header';
import Axios from 'axios';

function Account() {
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const createAd = () => {
    Axios.post('http://localhost:3001/api/insert', {
      productName: productName,
      productDesc: productDesc,
      productPrice: productPrice,
      productImage: productImage,
    });
  };
  return (
    <div>
      <Header />
      <h1> Account</h1>
      <input
        type="text"
        name="productName"
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      <input
        type="text"
        name="productDesc"
        onChange={(e) => {
          setProductDesc(e.target.value);
        }}
      />
      <input
        type="text"
        name="productPrice"
        onChange={(e) => {
          setProductPrice(e.target.value);
        }}
      />
      <input
        type="text"
        name="productImage"
        onChange={(e) => {
          setProductImage(e.target.value);
        }}
      />

      <button onClick={createAd}> Create an Add</button>
    </div>
  );
}

export default Account;
