import React from 'react';
import './Product.css';

function Product({ name, desc, seller, price, img }) {
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-name">
          <h3> {name}</h3>
        </div>
        <h4> Sold by: {seller} </h4>
        <br></br>R {price}
      </div>
      <div className="product-desc">
        <h5> {desc} </h5>
      </div>

      <img className="myImg" src={img} />

      <button type="submit"> Add to Basket</button>
    </div>
  );
}

export default Product;
