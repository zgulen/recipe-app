import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import {StyledCard, UL, LI, H3} from './style'
import Ingredients from './Ingredients'



const CardInfo = () => {
    const { label, meal } = useParams()
    const [foodInfo, setFoodInfo] = useState([])
    const baseUrl = `https://api.edamam.com/search?q=${label}&app_id=68c44782&app_key=61bf5b664dae3e4c8b60dd72eb2119e8&mealType=${meal}`
    const dataFetch = async () => {
        await axios.get(baseUrl)
            .then((res) => {
                return setFoodInfo(res.data.hits)
            })
    }
    useEffect(() => {
        dataFetch()
    }, [])
    console.log(foodInfo);
  return (
    <div>
        <Navbar />
        {
            
            // eslint-disable-next-line array-callback-return
            foodInfo?.map((item, index) =>{
                if(item.recipe.label === label)
                return (
                    <div>
                        <h1>Cuisine: {item.recipe.cuisineType}</h1>
                        <h1>{item.recipe.label}</h1>
                    <StyledCard key={index}>
                        <div>
                        <UL>
                            <H3>Nutrients</H3>
                            <LI>{item.recipe.totalNutrients.CA.label} : {Math.round(item.recipe.totalNutrients.CA.quantity)}{item.recipe.totalNutrients.CA.unit}</LI>
                            <LI>{item.recipe.totalNutrients.CHOCDF.label} : {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}{item.recipe.totalNutrients.CHOCDF.unit}</LI>
                            <LI>{item.recipe.totalNutrients.CHOLE.label} : {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}{item.recipe.totalNutrients.CHOLE.unit}</LI>
                            <LI>{item.recipe.totalNutrients.ENERC_KCAL.label} : {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}{item.recipe.totalNutrients.ENERC_KCAL.unit}</LI>
                            <LI>{item.recipe.totalNutrients.FAT.label} : {Math.round(item.recipe.totalNutrients.FAT.quantity)}{item.recipe.totalNutrients.FAT.unit}</LI>
                            <LI>{item.recipe.totalNutrients.PROCNT.label} : {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}{item.recipe.totalNutrients.PROCNT.unit}</LI>
                            <LI>{item.recipe.totalNutrients.SUGAR.label} : {Math.round(item.recipe.totalNutrients.SUGAR.quantity)}{item.recipe.totalNutrients.SUGAR.unit}</LI>
                            <LI>{item.recipe.totalNutrients.FE.label} : {Math.round(item.recipe.totalNutrients.FE.quantity)}{item.recipe.totalNutrients.FE.unit}</LI>
                        </UL>
                        </div>
                        <div>
                            <img src={item.recipe.image} alt="" />
                        </div>
                        <div>
                        <Ingredients ıngredients={item.recipe.ingredientLines}/>
                            {
                            item.recipe.ingredientLines.map((item, index)=>{
                                return(
                                    <div style={{textAlign:"left"}} key={index}>
                                    <p style={{color:"white"}}><span style={{color:"red"}}>{index+1}</span> - {item}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </StyledCard>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CardInfo