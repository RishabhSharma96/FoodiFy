import React, { useContext } from 'react'
import { useReducer, createContext } from 'react'

const cartState = createContext()
const cartDispatch = createContext()

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id,
                name: action.name,
                quantity: action.quantity,
                size: action.size,
                price: action.price,
                img: action.img
            }]

        case "REMOVE":
            let newArray = [...state]
            newArray.splice(action.index, 1)
            return newArray


        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    arr[index] = {
                        ...food,
                        quantity: parseInt(action.quantity) + food.quantity,
                        price: action.price + food.price
                    }
                }
                return arr
            })
            return arr

        case "DROP":
            let emptyArray = []
            return emptyArray

        default:
            console.log("Error")
    }

}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <cartDispatch.Provider value={dispatch}>
            <cartState.Provider value={state}>
                {children}
            </cartState.Provider>
        </cartDispatch.Provider>
    )
}

export const useCart = () => useContext(cartState)
export const useDispatch = () => useContext(cartDispatch)