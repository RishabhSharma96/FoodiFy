import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/signupStyles.css'

export default function SignUpForm() {

    const navigate = useNavigate()

    const [credentials, setcredentials] = React.useState({
        name: "",
        email: "",
        password: "",
        location: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            })
        })
        const json = await response.json()
        console.log(json)

        //if (!json.success) {
        //    alert("Enter valid Credentials")
        //}
        if (json.success) {
            navigate("/login")
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='boxer'>
            <form className="container" onClick={handleSubmit}>
                <div className="cardd">
                    <div className="singup">Sign Up</div>
                    <div className="inputBox1">
                        <input
                            type="text"
                            required="required"
                            name='email'
                            value={credentials.email}
                            onChange={onChange}
                        />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="text"
                            required="required"
                            name='name'
                            value={credentials.name}
                            onChange={onChange}
                        />
                        <span>Name</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="text"
                            required="required"
                            name='location'
                            value={credentials.location}
                            onChange={onChange}
                        />
                        <span>Location</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="password"
                            required="required"
                            name='password'
                            value={credentials.password}
                            onChange={onChange}
                        />
                        <span>Password</span>
                    </div>

                    <button className="enter" type="submit">Sign Up</button>

                </div>
            </form>
        </div>
    )
}
