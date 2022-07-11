import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RecipeCard = ({ query, meal,isSearched }) => {
    const [data, setData] = useState([])
    // const APP_ID = "68c44782"
    // const APP_KEY = "61bf5b664dae3e4c8b60dd72eb2119e8"
    const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=68c44782&app_key=61bf5b664dae3e4c8b60dd72eb2119e8&mealType=${meal}`
    const dataFetch = async () => {
        await axios.get(baseUrl)
            .then((res) => setData(res.data.hits))
    }
    useEffect(() => {
        dataFetch()
    }, [isSearched, meal])
    console.log(data);
    // console.log(query);
    // console.log(meal);
    return (
        <div>
            {
                data.map((item, index) => {
                    console.log(item.recipe.url);
                    return (
                        <div key={index}>
                            <h1>{item.recipe.url}</h1>
                            <img src={item.recipe.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeCard