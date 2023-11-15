import { useState } from "react"

const GetAllProducts = () => {

const [products,setProducts]  = useState({});


useEffect(() => {
    fetch('http://localhost:3030/jsonstore/products')
        .then(response => response.json())
        .then(setProducts)
        .catch(error => console.error(error));
},[])


return (

    <div>All products</div>
)

}

export default GetAllProducts