
import { useBasket } from '../context/BasketContext';


export default function MenuItem({
    _id,
    title,
    priceSmall,
    priceBig,
    imageUrl,
    ingredients
}) {
    const { addToBasket } = useBasket()


    const handleAddToBasket = (product) => {
       
        addToBasket(product);
       
          
    };
    return (
        <div className="pricing-entry d-flex ftco-animate">
            <img className="img" src={imageUrl} />
            <div className="desc pl-3">
                <div className="d-flex justify-content-between  text align-items-center">
                    <h3><span>{title}</span></h3>
                    <span className="price">{priceSmall}</span>
                </div>
                <div className="d-block d-flex justify-content-between align-items-center">
                    <p>{ingredients}</p>
                    <a className="ml-2 btn btn-white btn-outline-white"
                        onClick={() => handleAddToBasket({ name: title, price: priceSmall })}
                    >Добави
                    </a>
                </div>
            </div>
        </div>

    );
}


