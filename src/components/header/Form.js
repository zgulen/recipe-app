import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"


const Form = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [alert, setAlert] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        if (e.target[0].value === "zübeyir" && e.target[1].value === "5y50xe6Orc") {
            // <Navigate to="/home" />
            setIsLogged(true)

        } else {
            setAlert("kullanıcı adı veya şifreniz yanlış")
        }
    }
    // useEffect(() => {
    //     <Navigate to="/home" />
    // }, [isLogged])
    setTimeout(() => {
        setAlert("")
    }, 3000);

    return (
        <div>
            {isLogged === false ?
                <form onSubmit={handleLogin}>
                    <label htmlFor="id">Username</label>
                    <input type="text" name='id' placeholder="Username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder="Password" required />
                    <button>Login</button>
                    
                    <p>{alert}</p>
                </form> :
                <Navigate to="/home" />
            }
        </div>
    )
}

export default Form