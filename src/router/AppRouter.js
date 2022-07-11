import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/header/Form'



const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/home' element={<Navbar/>} /> */}
                    <Route path="/" element={<Form/>} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter