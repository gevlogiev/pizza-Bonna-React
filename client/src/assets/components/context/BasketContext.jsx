// BasketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};




export const BasketProvider = ({ children }) => {
  const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
  const [basket, setBasket] = useState(storedBasket);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);  // when i change basket state, update in localstorage

  const addToBasket = (product) => {  // i recieve state from product
    const existingProductIndex = basket.findIndex((p) => p.name === product.name);  // find for existing product

    if (existingProductIndex !== -1) {  // ako imam veche takuv, dobavqm 1 kum kolichestvoto;

      console.log(existingProductIndex);
     
      setBasket((prevBasket) => {
        const updatedBasket = [...prevBasket];
        updatedBasket[existingProductIndex] = {
          ...updatedBasket[existingProductIndex],
          quantity: updatedBasket[existingProductIndex].quantity + 1,
        };
        return updatedBasket;
      });
    } else {
    
      setBasket((prevBasket) => [...prevBasket, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBasket = (productName, updatedBasket) => {
    if (updatedBasket) {
      setBasket(updatedBasket);
    } else {
      setBasket((prevBasket) => prevBasket.filter((product) => product.name !== productName));
    }
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
