import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart, useDispatch } from '../Components/ContextReducer.jsx';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import "../styles/cartStyles.css"
import trash from "../trash.png"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cart() {

    const navigate = useNavigate()

    let data = useCart()
    let dispatch = useDispatch()

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("useremail");
        console.log(userEmail)
        let response = await fetch("http://localhost:5000/api/orderdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                order_data: data,
                order_date: new Date().toDateString()
            })
        })
        if (response.status === 200) {
            dispatch({ type: "DROP" })
            navigate("/")
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        <div>
            <div><Navbar /></div>

            {data.length === 0 ?
                <div>
                    <div className='m-5 w-80 text-center fs-3 tt '>The Cart is Empty!</div>
                </div> :

                <div className=''>
                    {/* {console.log(data)} */}
                    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md mainnboxx' >
                        <table className='table table-hover '>
                            <thead className=' fs-4' style={{ "color": "orange" }}>
                                <tr>
                                    <th scope='col' >#</th>
                                    <th scope='col' >Name</th>
                                    <th scope='col' >Quantity</th>
                                    <th scope='col' >Option</th>
                                    <th scope='col' >Amount</th>
                                    <th scope='col' ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((food, index) => (
                                    <tr>
                                        <th className='tt' scope='row' >{index + 1}</th>
                                        <td className='tt'>{food.name}</td>
                                        <td className='tt'>{food.quantity}</td>
                                        <td className='tt'>{food.size}</td>
                                        <td className='tt'>{food.price}</td>
                                        <td ><button type="button" className="img"><img src={trash} className="img" alt="trash" onClick={() => {
                                            dispatch({ type: "REMOVE", index: index })
                                            toast(`${food.name} removed from cart`)
                                        }
                                        } /></button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <h1 className='fs-2 tt'>Total Price: {totalPrice}/-</h1>
                        </div>
                        <div>
                            <button className='btn mt-5 ' style={{ "padding": "4px", "width": "10rem", "color": "white", "backgroundColor": "orange" }} onClick={handleCheckOut}> Check Out </button>
                        </div>
                    </div>
                </div>
            }
            <div className='footer-for-orders' style={{ 'position': 'absolute', "top": "91vh", "width": "100vw" }}><Footer /></div>

            <ToastContainer
                theme='dark'
                autoClose={500}
            />
        </div>

    )
}