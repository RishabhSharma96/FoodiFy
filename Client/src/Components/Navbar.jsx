import Badge from "react-bootstrap/Badge"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbarStyles.css'
import Modal from "../Modal.jsx";
import Cart from "../displays/Cart.jsx"
import { useCart } from "./ContextReducer";


export default function Navbar() {

    const navigate = useNavigate()
    const [collapsed, setCollapsed] = React.useState(false)

    const handleClick = () => {
        setCollapsed(!collapsed)
    }

    const handleLogout = (e) => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    const [cartView, setCartView] = useState(0)
    console.log(cartView)

    let data = useCart()
    return (


        <>
            <nav>
                <div className='left-context'>
                    <Link to="/"><div className="logo"> FoodiFy</div></Link>
                    <div className={collapsed ? "active links" : "links"}>
                        <ul className={collapsed ? "active" : ""}>
                            <Link to="/"><li>Home</li></Link>
                            {(localStorage.getItem("authToken")) ?
                                <Link to="/orders"><li>My Orders</li></Link> : ""
                            }
                        </ul>
                    </div>
                </div>
                <div className={collapsed ? "active buttons right-context" : "buttons right-context"}>

                    {(localStorage.getItem("authToken")) ?
                        <button className='btn-1' onClick={handleLogout}>Logout</button> :
                        <Link to="/login"><button className='btn-1'>Login</button></Link>
                    }

                    {(localStorage.getItem("authToken")) ?
                        <Link to ="/cart"><button onClick={() => { setCartView(1) }} className='btn-1'>
                            My Cart{" "}
                            <Badge pill bg="success"> {data.length} </Badge>
                            {/* {
                                cartView ? <Modal onClose={() => { setCartView(0) }}><Cart/></Modal> : null
                            } */}
                        </button></Link>
                        :
                        <Link to="/createuser"><button className='btn-2'>Sign Up</button></Link>
                    }
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={collapsed ? "fas fa-times" : "fa-solid fa-bars"}></i>
                </div>
            </nav>
        </>
    )
}


