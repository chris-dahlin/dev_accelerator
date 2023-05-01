import React, {useState, useEffect} from "react";

import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
import './App.css';

// 29e0fcd3

const API_URL = 'http://www.omdbapi.com?apikey=29e0fcd3'

const movie1 = {
    "Title": "Ghostbusters",
    "Year": "1984",
    "imdbID": "tt0087332",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg"
}

const App = () => {

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
}

useEffect(() => {
    searchMovies('Ghostbusters')

}, []);

return (
   <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
<input placeholder="Search for Movies" value="Ghostbusters" onChange={() => {}}/>
<img 
src={SearchIcon}
alt="search"
onClick={() => {}}
/>
</div>

<div className="container">
    <div className="movie">
        <div>
<p>{movie1.Year}</p>
</div>

<img src={movie1.Poster} alt={movie1.Title}/>
<div>


</div>

    </div>


</div>

   </div>
);
}

export default App;