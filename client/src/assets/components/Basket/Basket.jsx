// Basket.js
import React from 'react';
import { useBasket } from '../Services/BasketContext';


const Basket = () => {
  const { basket, clearBasket } = useBasket();

  return (
    <div>
      <h2>Your Basket</h2>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <button onClick={clearBasket}>Clear Basket</button>
    </div>
  );
};

export default Basket;
