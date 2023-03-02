import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SignUpForm from '../Components/SignUpForm'
import '../styles/signupStyles.css'

export default function SignUp() {
    return (
        <div>
            <div><Navbar /></div>
            <div><SignUpForm /></div>
            <div><Footer /></div>
        </div>
    )
}
