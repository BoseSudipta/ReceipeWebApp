import React,{ useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import SelectedReceipe from "./SelectedReceipe";
const selectedCategoryItem = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
const ReceipeCard =({receipes,key})=> {
    const {
        strCategoryThumb,
        strCategory
        
    } = receipes;
    const [selectedItem, setItem] = useState([]);
    const handleSubmit= async (categoryName)=>{
        
        const res = await fetch(selectedCategoryItem + categoryName);
        const data = await res.json();
        setItem(data.meals);
    }

    
      
    return ( 

        <div className="card">
                <img
                 src={strCategoryThumb}
                 alt={strCategory}
                 className="card-image"
                />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                {/* <h3>{strMeal}</h3> */}
                <p>
                   
                        <Link 
                            to={{pathname:`/home/${strCategory}`,
                            
                        }}
                        className ="card-link" 
                        >Explore</Link>
                    
                </p>
            </div>
        </div>
       
       
     );
}

export default ReceipeCard ;