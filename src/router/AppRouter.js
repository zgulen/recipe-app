import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'



const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter