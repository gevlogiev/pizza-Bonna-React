import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";

import * as ordersService from './../Services/ordersService'
import AuthContext from "../context/AuthContext";


const GetAllOrders = () => {
    const navigate = useNavigate();



    const {userId, role} = useContext(AuthContext) 
    const [orders, setOrders] = useState([]);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [editProduct, setEditProduct] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
              
                let type = role == 2 ? ordersService.getAllForUser(userId) : ordersService.getAll();
              
                // Use await to fetch the data
                const result = await type;
                setOrders(result);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, [role, userId]); 
    



    return (
        <div className="container h-cont">
            <span>Поръчка</span>
            <table className="table">
                <thead>
                    <tr>
                        <th>Дата на създаване</th>
                        <th>Потребител</th>
                        <th>Данни за поръчката</th>

                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <>
                            <tr>
                                <td>{order._createdOn}</td>
                                <td>{order._id}</td>

                                <td>
                                    <table className=" table-striped table-dark">
                                        <thead>
                                            <tr>

                                                <th>Име</th>
                                                <th>Количество</th>
                                                <th>Цена</th>
                                                <th>Общо</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {order.products.map((product, productIndex) => (
                                                <tr>
                                                    <>
                                                        <td>{product.name}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price}</td>
                                                        <td>{(product.quantity * product.price).toFixed(2)}</td>
                                                    </>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </>

                    ))}

                </tbody>
            </table>


        </div>



    )

}

export default GetAllOrders