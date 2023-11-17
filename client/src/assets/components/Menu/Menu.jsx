import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
// import AddProduct from './../Basket/AddProduct'
const Menu = () => {

    const [productItems, setProductItems] = useState([]);



    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/products')
            .then(response => response.json())
            .then(response => setProductItems(Object.values(response)))
            .catch(error => console.error(error));
    }, [])


    console.log(productItems)
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Нашите предложения</h2>
                        <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                        <p className="mt-5">Изберете продукт от менюто, а след това ще го приготвим пред вас.</p>
                    </div>
                </div>



                {/* CATEGORIES ******************************** */}
                <div className="col-md-12 nav-link-wrap mb-5">
		            <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		              <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Pizza</a>

		              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>

		              <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Burgers</a>

		              <a className="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Pasta</a>
		            </div>
		          </div>
                     {/* ******************************** */}



                     
                <div className="row">
                    <div className="col-md-6">

                        {productItems.map(productItem => (
                            <MenuItem key={productItem._id} {...productItem} />
                        ))}

                        {/* <div className="pricing-entry d-flex ftco-animate">
                        <img />
                        {/* <div className="img" style="background-image: url(images/pizza-1.jpg);"></div> */}
                        {/* <div className="desc pl-3">
                            <div className="d-flex text align-items-center">
                                <h3><span>Italian Pizza</span></h3>
                                <span className="price">$20.00</span>
                            </div>
                            <div className="d-block">
                                <p>A small river named Duden flows by their place and supplies</p>
                                <button onClick={() => addProduct(123)}>Add to Basket</button>
                            </div>
                        </div>
                    </div>  */}

</div >




                <div className="col-md-6">
                    <div className="pricing-entry d-flex ftco-animate">
                        {/* <div className="img" style="background-image: url(images/pizza-5.jpg);"></div> */}
                        <div className="desc pl-3">
                            <div className="d-flex text align-items-center">
                                <h3><span>Hawaiian Special</span></h3>
                                <span className="price">$49.91</span>
                            </div>
                            <div className="d-block">
                                <p>A small river named Duden flows by their place and supplies</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
            
        </>

    )

}

export default Menu;