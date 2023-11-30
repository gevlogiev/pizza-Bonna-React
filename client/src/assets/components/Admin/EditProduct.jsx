import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditProduct = ({
    _id,
    title,
    category,
    priceSmall,
    priceBig,
    ingredients,
    closeModal }) => {
    // Other logic and state in your EditProduct component
    console.log(_id)
    const handleSave = () => {
        // Save logic

        // Close the modal

    };

    return (
        <Modal show={true} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Редакция на продукт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>

                <label>Име на продукта:</label>
                <input type="text" value={title}
                //  onChange={handleInputChange} 
                />
                </div>


                  <label>Име на продукта:</label>
                <select type="text"defaultValue={category}> 
                        <option value={1}>Пица</option>
                        <option value={2}>Напитка</option>
                        <option value={3}>Десерт</option>
                        <option value={4}>Алкохол</option>
                    </select>
                <div>

<label>Цена-малка:</label>
<input type="text" value={priceSmall}
//  onChange={handleInputChange} 
/>
</div>
<div>

<label>Цена-голяма:</label>
<input type="text" value={priceBig}
//  onChange={handleInputChange} 
/>
</div>
<div>

<label>Съставки:</label>
<input type="text" value={ingredients}
//  onChange={handleInputChange} 
/>
</div>
              
               
           
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Затвори
                </Button>
                <Button variant="primary"
                // onClick={handleSave}
                >
                    Запази
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditProduct;
