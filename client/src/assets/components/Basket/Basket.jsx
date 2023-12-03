// Basket.js
import React from 'react';
import { useBasket } from '../context/BasketContext';

const Basket = () => {
  const { basket, clearBasket, removeFromBasket, orderProducts } = useBasket();

  const updateQuantity = (productName, newQuantity) => {
    const updatedBasket = basket.map((product) => {
      if (product.name === productName) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    const filteredBasket = updatedBasket.filter((product) => product.quantity > 0);

    removeFromBasket(productName, filteredBasket);
  };




  return (
    <div>
      <h2>Вашата кошница</h2>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>
            {product.name} - ед.цена: {product.price} - Количество: {product.quantity}  Общо: {(product.price * product.quantity).toFixed(2)}
            <button onClick={() => updateQuantity(product.name, product.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(product.name, product.quantity + 1)}>+</button>
            <button onClick={() => removeFromBasket(product.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearBasket}>Изчисти кошницата</button>
      <button onClick={orderProducts}>Поръчай</button>
    </div>
  );
};

export default Basket;
