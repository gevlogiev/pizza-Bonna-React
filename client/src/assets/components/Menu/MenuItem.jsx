
import { useContext, useState } from 'react';
import { useBasket } from '../context/BasketContext';
import { Modal, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';


export default function MenuItem({
    _id,
    title,
    priceSmall,
    priceBig,
    imageUrl,
    ingredients
}) {
    const { addToBasket } = useBasket()
    const { isAuthenticated } = useContext(AuthContext)
    const handleAddToBasket = (product) => {
        addToBasket(product);
    };


    const closeModal = (e) => {
        setModal(false);
        setProductInfo('')
    }

    const [productInfo, setProductInfo] = useState('');
    const [modal, setModal] = useState(false);



    const detailsProduct = (_id) => {
        fetch(`http://localhost:3030/data/products/${_id}`)
            .then(response => response.json())
            .then(response => setProductInfo(response))
            .catch(error => console.error(error));
        setModal(true);
    };

    return (
        <>

            <div className="pricing-entry d-flex ftco-animate">
                <img className="img" src={imageUrl} />
                <div className="desc pl-3">
                    <div className="d-flex justify-content-between  text align-items-center">
                        <h3><span>{title}</span></h3>
                        <span className="price">{priceSmall} <span onClick={() => detailsProduct(_id)}>ⓘ</span></span>

                    </div>
                    <div className="d-block d-flex justify-content-between align-items-center">
                        <p>{ingredients}</p>
                        {isAuthenticated && (
                            <a className="ml-2 btn btn-white btn-outline-white"
                                onClick={() => handleAddToBasket({ name: title, price: priceSmall, id: _id })}
                            >Добави
                            </a>

                        )}


                    </div>
                </div>
            </div>


            <Modal show={modal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Подробности за продукта</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label>Цена на фамилна пица:</label>
                        <input type="text" value={productInfo.priceBig} />
                    </div>
                    <div>
                        <label>Алергени:</label>
                        <input type="text" value={productInfo.allergens} />
                    </div>
                    <div>
                        <label>Допълнителна информация:</label>
                        <input type="text" value={productInfo.description} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Затвори
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}


