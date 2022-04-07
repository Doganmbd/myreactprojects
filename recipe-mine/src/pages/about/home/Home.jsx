import React,{useState} from 'react';
import axios from "axios";


const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime","Dessert","Drink","Other"];
const APP_ID ="26d5c7a8";
const APP_KEY ="4ec7c0e96dab72c1dbf631d3fedfe988";


const Home = () => {

  const [query,setQuery] = useState("");
  const [meal,setMeal] = useState("");

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}` ;

  const getData= async ()=> {
    
  }

  return (
    <div>Home</div>
  )
}

export default Home