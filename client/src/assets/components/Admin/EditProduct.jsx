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
                <option>123</option>
                <option>345</option>
                <option>789</option>
                <option>111</option>
                
                
                </select>

              
               
           
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
