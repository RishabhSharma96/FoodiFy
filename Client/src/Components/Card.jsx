import React, { useEffect, useRef, useState } from 'react'
// import { options } from '../../../backend/routes/userRegAndLogin'
import '../styles/cardStyles.css'
import { useCart, useDispatch } from './ContextReducer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Card(props) {

    let dispatch = useDispatch()
    let data = useCart()

    const priceRef = useRef()

    let prices = Object.keys(props.options)
    // let foodItemData = props.foodItems

    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")

    const handleCartAdding = async () => {

        if(!localStorage.getItem("useremail")){

        toast(`${props.foodItem.name} added to cart`)

        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item
                break
            }
        }

        if (food !== []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE",
                    id: props.foodItem._id,
                    price: finalPrice,
                    quantity: quantity
                })
                return
            }
            else if (food.size !== size) {
                await dispatch({
                    type: "ADD",
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    quantity: quantity,
                    size: size
                })
                return
            }
            return
        }
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            quantity: quantity,
            size: size
        })
    }
    else{
        toast("Please login first")
    }
    }

    let finalPrice = quantity * parseInt(props.options[size])

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card">
                <img src={props.foodItem.img} alt="" />
                <div className="about">
                    <p className='title'>{props.foodItem.name}</p>
                </div>
                <div className="dropdowns">
                    <select className='select-1' name="quantity" id="" onChange={(e) => setQuantity(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (<option value={i + 1} key={i + 1}>{i + 1}</option>)
                        })}
                    </select>
                    <select className='select-2' ref={priceRef} name="" id="" onChange={(e) => setSize(e.target.value)}>
                        {
                            prices.map((d) => {
                                return <option key={d} value={d}>{d}</option>
                            })
                        }
                    </select>
                    <div className="total">
                        Price : {finalPrice}
                    </div>
                    <button className="cartbutton" onClick={handleCartAdding}>Add to Cart</button>
                </div>
            </div>
            <ToastContainer
                theme='dark'
                autoClose={1500}
            />
        </div>
    )
}
