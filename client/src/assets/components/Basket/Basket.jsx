
import React from 'react';
import { useBasket } from '../context/BasketContext';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


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


  function orderProductsHandler() {



    if (Object.keys(basket).length > 0) {
      orderProducts()
    } else {

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Кошницата е празна`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'bg-dark text-warning',
        }
      });
    }
  }

 

  return (
    <div className='container h-cont'>
    <h2>Вашата кошница</h2>
    {Object.keys(basket).length > 0 ? (
      <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Име</th>
            <th scope="col">Ед. цена</th>
            <th scope="col">Количество</th>
            <th scope="col">Общо</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(product.name, product.quantity - 1)}>-</button>
                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(product.name, product.quantity + 1)}>+</button>
                <button className="btn btn-outline-danger" onClick={() => removeFromBasket(product.name)}>Премахни</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button className="btn btn-danger" onClick={clearBasket}>Изчисти кошницата</button>
        <button className="btn btn-success" onClick={(e) => orderProductsHandler()}>Поръчай</button>
        </>
    ) : (
      <div>
        <p>Няма продукти в кошницата</p>
        <Link to="/menu">
          <button className="btn btn-primary">Към менюто</button>
        </Link>
      </div>
    )}
  
  </div>
  );
};

export default Basket;
