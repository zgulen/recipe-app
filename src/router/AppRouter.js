import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Form from '../components/header/Form'
import CardInfo from '../pages/home/CardInfo'



const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/home' element={<Navbar/>} /> */}
                    <Route path="/" element={<Form/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/:label/:meal" element={<CardInfo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter