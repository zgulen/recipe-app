import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    const [query, setQuerry] = useState()
    const [meal, setMeal] = useState()
    const [isSearched, setIsSearched] = useState(false)
    console.log(meal);
    const handleGetFood = (e) => {
        e.preventDefault()
        setIsSearched(!isSearched)
    }
    return (
        <div>
            <Navbar/>
            <form onSubmit={handleGetFood}>
                <input style={{marginTop:"2rem",  padding:".5rem"}} type="text" placeholder='SEARCH' name='search' onChange={(e) => setQuerry(e.target.value)} />
                <button style={{marginTop:"2rem", padding:".5rem", marginLeft:"1rem"}}>
                {isSearched && "New"} Search
                </button>
                <select onChange={(e) => setMeal(e.target.value)} style={{marginTop:"2rem",marginLeft:"1rem", padding:".5rem"}}>
                    <option selected disabled>Select Meal</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                    <option value="teatime">Teatime</option>
                </select>
            </form>
            {isSearched && <RecipeCard query={query} meal={meal} isSearched={isSearched}/>}
        </div>
    )
}

export default Home