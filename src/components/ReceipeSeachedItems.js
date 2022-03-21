import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
export default class ReceipeSeachedItems extends Component {
  constructor(props) {
    super(props);
    this.state={
      meals : []
    }
  }
  static getDerivedStateFromProps(props, state) {
    if(props.seachMeals !== state.meals){
        return{
          meals: props.seachMeals
        };
    }
    return null; 
}
  render() {
    
    return (
     <div>
       {
         
         !!this.state.meals && this.state.meals.map((data,key)=>(
          <div className="card">
                <img
                 src={data.strMealThumb}
                 alt={data.strMeal}
                 className="card-image"
                />
            <div className="card-body">
                <span className="category">{data.strCategory}</span>
                {/* <h3>{strMeal}</h3> */}
                <p>

                   <a href={"https://www.themealdb.com/meal/" + data.idMeal} target="_blank">Instructions</a>
                </p>
            </div>
        </div>
       
         ))
         
       }
     </div>
    )
  }
}
