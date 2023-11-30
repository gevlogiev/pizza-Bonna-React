import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import EditProduct from "./EditProduct";
import * as request from './../../../lib/request'


const GetAllProducts = () => {
	const navigate = useNavigate();


	let baseUrl = 'http://localhost:3030/data/products';

	const [products, setProducts] = useState([]);
	const [showEditProduct, setShowEditProduct] = useState(false);
	const [editProduct, setEditProduct] = useState('');


	useEffect(() => {
		fetch(baseUrl)
			.then(response => response.json())
			.then(response => setProducts(Object.values(response)))
			.catch(error => console.error(error));
	}, [])



	const handleEditClick = (product) => {
		setEditProduct(product)
		setShowEditProduct(true);
	};

	const closeModal = (e) => {
		setShowEditProduct(false);
	}



	const handleDeleteProduct = async (productId) => {
		try {
			const result = await request.remove(`${baseUrl}/${productId}`);
			setProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
			return result;
		} catch (err) {
			
			console.log(err);
			throw err;
		}
	};


	return (
		<>
  <div className="container mt-5">
    <div className="text-center mb-4">
      <h2>Всички продукти</h2>
    </div>
    <table className="table table-bordered table-striped">
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
            <td>{index + 1}. {product.title}</td>
			<td>
  {(() => {
    switch (product.category) {
      case 1:
        return "Пица";
      case 2:
        return "Напиткa";
      case 3:
        return "Десерт";
      case 4:
        return "Алкохол";
      default:
        return "Непозната";
    }
  })()}
</td>
            <td>{product.priceSmall}</td>
            <td>{product.priceBig}</td>
            <td>{product.ingredients}</td>
            <td>
              <input
                type="button"
                className="btn btn-primary"
                value="Редакция"
                onClick={(e) => handleEditClick(product)}
              />
            </td>
            <td>
              <input
                type="button"
                className="btn btn-danger"
                value="Изтриване"
                onClick={(e) => handleDeleteProduct(product._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {showEditProduct && <EditProduct {...editProduct} closed={showEditProduct} closeModal={closeModal} />}
    {products.length === 0 && <h3 className="no-articles text-center">No articles yet</h3>}
    <div className="text-center">
      <Link to='/add-product' className="btn btn-success">
        Добави продукт
      </Link>
    </div>
  </div>
</>

	)

}

export default GetAllProducts