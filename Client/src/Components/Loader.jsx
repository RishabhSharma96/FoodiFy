import React from 'react'
import "../styles/loaderStyles.css"

export default function Loader() {
    return (
        <div className='mainBoxForLoader'>
            <span class="loader"></span>
            <h1 className='loadertext'>Cooking your meal !</h1>
        </div>
    )
}
