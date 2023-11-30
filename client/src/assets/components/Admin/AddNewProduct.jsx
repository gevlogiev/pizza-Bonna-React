import { useNavigate } from 'react-router-dom';

import * as pizzaService from './../Services/pizzaService'

const ProductCreate = () => {
    const navigate = useNavigate();

    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await pizzaService.create(productData);
            
            navigate('/get-all-products');
        } catch (err) {
            
            console.log(err);
        }
    }

    return (
      
        <section id="create-page">
        <form id="create" onSubmit={createProductSubmitHandler} className="container">
            <h1>Добавяне на нов продукт</h1>
            
            <div className="mb-3 form-group">
                <label htmlFor="title" className="form-label">Име на продукт:</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Въведете име на продукт" />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="category" className="form-label">Категория:</label>
                <select className="form-select" id="category" name="category">
                    <option value={1}>Пица</option>
                    <option value={2}>Напитка</option>
                    <option value={3}>Десерт</option>
                    <option value={4}>Алкохол</option>
                </select>
            </div>
          


            <div className="mb-3 form-group">
                <label htmlFor="priceSmall" className="form-label">Цена малка:</label>
                <input type="text" className="form-control" id="priceSmall" name="priceSmall" placeholder="Въведете цена малка" />
            </div>

            <div className="mb-3">
                <label htmlFor="priceBig form-group" className="form-label">Цена голяма:</label>
                <input type="text" className="form-control" id="priceBig" name="priceBig" placeholder="Въведете цена голяма" />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="imageUrl" className="form-label">Снимка:</label>
                <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Снимка на продукта" />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="ingredients" className="form-label">Съставки:</label>
                <textarea className="form-control" id="ingredients" name="ingredients"></textarea>
            </div>

            <input className="btn btn-primary" type="submit" value="Добави продукт" />
        </form>
    </section>
    );
}
export default ProductCreate
