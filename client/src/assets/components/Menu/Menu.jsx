import { useState, useEffect } from 'react';
// import AddProduct from './../Basket/AddProduct'
const Menu = () => {

const [productItems,setProductItems]= useState({});

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then(response => response.json())
            .then(setProductItems)
            .catch(error => console.error(error));
    },[])

    console.log(productItems)
    return (


        <div className="container">
            <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                <div className="col-md-7 heading-section text-center ftco-animate">
                    <h2 className="mb-4">Нашите предложения</h2>
                    <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                    <p className="mt-5">Изберете продукт от менюто, а след това ще го приготвим пред вас.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">




                    <div className="pricing-entry d-flex ftco-animate">
                        <img />
                        {/* <div className="img" style="background-image: url(images/pizza-1.jpg);"></div> */}
                        <div className="desc pl-3">
                            <div className="d-flex text align-items-center">
                                <h3><span>Italian Pizza</span></h3>
                                <span className="price">$20.00</span>
                            </div>
                            <div className="d-block">
                                <p>A small river named Duden flows by their place and supplies</p>
                                <button onClick={() => addProduct(123)}>Add to Basket</button>
                            </div>
                        </div>
                    </div>



                    
                    

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
            </div>
        </div>
    )

}

export default Menu;