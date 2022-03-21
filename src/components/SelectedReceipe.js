import React, { useState,useEffect } from 'react'
import { useLocation,Link} from "react-router-dom";
const foodItemApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
function SelectedReceipe() {
    
    const [location,setLocation] =  useState(useLocation());
    const [categoryName,setName] = useState(null);
    const [categoryFood,setFood] = useState([]);
    const [foodItemsFlag, setFlag] = useState(false);
    useEffect(()=>{
        if(!!location){
            let x = location.pathname.substring(6)
            console.log(x);
            setName(x);
        }
    },[location])
   useEffect(()=>{
       if(!!categoryName &&!foodItemsFlag){
        foodItems(categoryName);
        setFlag(true)
       }
   },[!!categoryName,!foodItemsFlag])
   const foodItems= async (categoryName)=>{
        
    const res = await fetch(foodItemApi + categoryName);
    const data = await res.json();
    console.log(data)
    setFood(data.meals);
}
  return (
    <div className="container">
    <div className="recipes">
          {categoryFood.map((data,key)=>(
              <div className="card">
          
              <img
               src={data.strMealThumb}
               alt={data.strMeal}
               className="card-image"
              />
          
             
         
         
          
          <div className="card-body">
              <span className="category">{data.strMeal}</span>
              {/* <h3>{strMeal}</h3> */}
              <p>
                 
                     <a href={"https://www.themealdb.com/meal/" + data.idMeal} target="_blank">Instructions</a>
                      
                 
              </p>
              
          </div>
      </div>
      ))}
      </div>
      </div>
    
  )
}

export default SelectedReceipe