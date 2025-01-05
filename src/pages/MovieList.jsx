import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../componets/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState();
  const [FilteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c4d05e8d26c497586d952c92ab0f2ab5"
    )
    .then((response) => {
      setMovies(response.data.results)
      setFilteredMovies(response.data.results)
      
    })
    .catch((err) => console.log(err));
  }, []);
  
  const handelSearch = (event) => {
    const searchVal = event.target.value.trim();
    if(!searchVal)
    {
      setFilteredMovies(movies);
    }
    else
    {
      const filteredMovies = movies?.filter((movieEle)=>movieEle.title.toLowerCase().includes(searchVal.toLowerCase()))
      setFilteredMovies(filteredMovies)
    }
    console.log(searchVal);
  };
  // const handelSearchN = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.one.value)
  //     }

  return (
    

   <> 
   {/* onSubmit={handelSearchN} */}
   <form className="d-flex" role="search" >
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="one" onChange={(e) => {handelSearch(e)}}  />
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>

    <div className="row row-cols-1 row-cols-md-3 g-4"> 
    {/* movie card */}
    {FilteredMovies?.map((movieElement) => (
        <div className="col" key={movieElement.id}>
            {/* {console.log(movieElement.id)} */}
        <MovieCard movieElement={movieElement} />
      </div>
    ))}
    </div>
    </>
  );
}

