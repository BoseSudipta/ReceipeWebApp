import React,{ useEffect,useState } from "react";
import ReceipeCard from "./components/ReceipeCard";
import SearchBar from "./components/SeachBar";
import ReceipeSeachedItems from "./components/ReceipeSeachedItems";
import './App.css';



const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const listCatergories = 'https://www.themealdb.com/api/json/v1/1/categories.php';
function App() {

  const[receipe,setReceipe] = useState([]);
  const[seachQuery,setSeachQuery] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [receipeFlag,setReceipeFlag] = useState(false);
  const [seachMeal,setSeachMeal] = useState([]);
  useEffect(()=>{
    categoryReceipe();
    
  },[])

 
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const tempData = await res.json();
    setSeachMeal(tempData.meals);
    setIsLoading(false);
    setReceipeFlag(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }


  const categoryReceipe = async () =>{
    const res = await fetch(listCatergories);
    const data = await res.json();
    setReceipe(data.categories)
  }
  // categoryReceipe=()=>{
  
  // }
  console.log(seachMeal)
  return (
    <div className="container">
    
       <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
     
      {!receipeFlag ?
       <div className="recipes">
      {receipe.map((data,key)=>(
        <ReceipeCard 
          receipes ={data}
          key={key}
          
        />
      ))}
       </div>
      :
      <div className="recipes">
      
        <ReceipeSeachedItems
          seachMeals = {seachMeal}
          
        />
      
      
      </div>
      
      
}

    </div>
  );
}

export default App;


