import { useNavigate } from 'react-router-dom';

import * as pizzaService from './../Services/pizzaService'

const ProductCreate = () => {
    const navigate = useNavigate();

    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await pizzaService.create(productData);
            console.log(productData)
            navigate('/get-all-products');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createProductSubmitHandler}>
                <div className="container">
                    <h1>Create product</h1>
                    <label htmlFor="leg-title">Име на продукт:</label>
                    <input type="text" id="title" name="title" placeholder="Въведете име на продукт" />

                    <label htmlFor="category">Категория:</label>
                    <select>
                        <option value={1}>Пица</option>
                        <option value={2}>Напитка</option>
                        <option value={3}>Десерт</option>
                        <option value={4}>Алкохол</option>
                    </select>
                    {/* <input type="text" id="category" name="category" placeholder="Изберете категория" /> */}

                    <label htmlFor="priceSmall">Цена малка:</label>
                    <input type="text" id="priceSmall" name="priceSmall" placeholder="Въведете цена малка" />

                    <label htmlFor="priceBig">Цена голяма:</label>
                    <input type="text" id="priceBig" name="priceBig" placeholder="Въведете цена голяма" />

                    <label htmlFor="game-img">Снимка:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Снимка на продукта" />

                    <label htmlFor="ingredients">Съставки:</label>
                    <textarea name="ingredients" id="ingredients"></textarea>
                    <input className="btn submit" type="submit" value="Добави продукт" />
                </div>
            </form>
        </section>
    );
}
export default ProductCreate
