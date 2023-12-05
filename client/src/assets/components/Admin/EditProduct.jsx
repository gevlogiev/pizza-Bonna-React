import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import * as pizzaService from './../Services/pizzaService'
import { useNavigate } from 'react-router-dom';

const EditProduct = ({
    _id,
    closeModal }) => {

    const [product, setProduct] = useState({
        title:'',
        priceSmall:'',
        priceBig:'',
        ingredients:'',
        allergens:'',
        description:'',
    });


    const navigate = useNavigate();

    useEffect(() => {
        pizzaService.getDetails(_id)
            .then(result => {
                setProduct(result);
            });
    }, []);


    const handleInputChange = (e) => {
        setProduct(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();

       

        try {
            await pizzaService.edit(_id, product);

            navigate('/menu');
        } catch (err) {
            
            console.log(err);
        }
    }

    

    return (
        <Modal show={true} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Редакция на продукт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>

                    <label>Име на продукта:</label>
                    <input type="text" name="title"  value={product.title}
                        onChange={handleInputChange}
                    />
                </div>


                <label>Категория</label>
                <select type="text"  disabled 
                // defaultValue={product.category}
                >
                    <option value={1}>Пица</option>
                    <option value={2}>Напитка</option>
                    <option value={3}>Десерт</option>
                    <option value={4}>Алкохол</option>
                </select>
                <div>

                    <label>Цена-малка:</label>
                    <input type="text" name='priceSmall' value={product.priceSmall}
                        onChange={handleInputChange}
                    />
                </div>
                <div>

                    <label>Цена-голяма:</label>
                    <input type="text" name='priceBig' value={product.priceBig}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Съставки:</label>
                    <input type="text" name='ingredients' value={product.ingredients}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Алергени:</label>
                    <input type="text" name='allergens' value={product.allergens}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Описание:</label>
                    <input type="text" name='description' value={product.description}
                        onChange={handleInputChange}
                    />
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Затвори
                </Button>
                <Button variant="primary"
                    onClick={handleSave}
                >
                    Запази
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditProduct;
