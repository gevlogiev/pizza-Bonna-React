import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";


const GetAllProducts = () => {

  const [products, setProducts] = useState([]);
  const [showEditProduct, setShowEditProduct] = useState(false);


console.log(products)

  useEffect(() => {
    fetch('http://localhost:3030/data/products')
      .then(response => response.json())
      .then(response => setProducts(Object.values(response)))
      .catch(error => console.error(error));
  }, [])



  const handleEditClick = () => {
    setShowEditProduct(true);
  };

 
  const closeModal = (e) => {
    setShowEditProduct(false);
}
  return (
    <>
      <div>All products</div>
      <table>
        <thead>
          <tr>
            <th>Има не продукт</th>
            <th>Категория</th>
            <th>Цена малка</th>
            <th>Цена голяма</th>
            <th>Съставки</th>
            <th>Редакция</th>
            <th>Изтриване</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.priceSmall}</td>
              <td>{product.priceBig}</td>
              <td>{product.ingredients}</td>
              <td><input
                type="button"
                value={"Редакция"}
                onClick={handleEditClick}
              />
                {showEditProduct && <EditProduct key={product._id} {...product}  closed={showEditProduct} closeModal={closeModal}/>} </td>
              <td><input type="button" value={"Изтриване"}></input></td>

            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && <h3 className="no-articles">No articles yet</h3>}
      <Link to='/add-product'><input type="button" value={'Добави продукт'}></input></Link>
    </>
  )

}

export default GetAllProducts