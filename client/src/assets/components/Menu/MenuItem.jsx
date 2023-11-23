import { Link } from "react-router-dom";

export default function MenuItem({
    _id,
    title,
    priceSmall,
    priceBig,
    imageUrl,
    ingredients
}) {
    return (
        <div className="pricing-entry d-flex ftco-animate">
            <img className="img" src={imageUrl} />
            <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                    <h3><span>{title}</span></h3>
                    <span className="price">{priceSmall}/{priceBig}</span>
                </div>
                <div className="d-block">
                    <p>{ingredients}</p>
                    {/* <button onClick={() => addProduct(_id)}>Add to Basket</button> */}
                </div>
            </div>
        </div>

    );
}
