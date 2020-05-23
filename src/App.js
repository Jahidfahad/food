import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import food from '../src/img/food.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';






const id = "2b54a1a0";
const key = "21359a1682307cea96b4a36e89d2f167"
 





function App() {

  
const [recipe, setRecipe] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery]  = useState("chicken");




  useEffect(() =>{
   fetchApi();
  }, [query])


 
  const fetchApi = async () =>{
    try {
        const {data} = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
        setRecipe(data.hits)
    } catch (error) {
        console.log(error)
    }
}

const updateSearch = e =>{
    setSearch(e.target.value)
    
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
  setSearch("")
}


  

  return (
    <div>
      <div className="food-header">
      <img className="food-img" src={food} alt=""/>
      <h1 className="food">Food Recipe</h1>
      </div>

      <form className="search" onSubmit={getSearch}>
        <input className="form-control-md search-input" placeholder="Search recipe" type="text" value={search} onChange={updateSearch}/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

          {
            recipe.map(res => (
              <Home title ={res.recipe.label} image={res.recipe.image} ingredients={res.recipe.ingredients}></Home>
            ))
          }

        <Footer></Footer>
     
    
    </div>
  );
}

export default App;
