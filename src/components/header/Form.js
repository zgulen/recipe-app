import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"
import StyledForm, {Div, Input,Button} from './style'


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
        <Div>
            {isLogged === false ?
                <StyledForm onSubmit={handleLogin}>
                    <div style={{marginTop:"2rem"}}>
                    <label htmlFor="id">Username</label>
                    <Input type="text" name='id' placeholder="Username" required />
                    </div>
                    <div>
                    <label htmlFor="password">Password </label>
                    <Input type="password" name='password' placeholder="Password" required />
                    </div>
                    <Button>Login</Button>
                    <p>{alert}</p>
                </StyledForm> :
                <Navigate to="/home" />
            }
        </Div>
    )
}

export default Form