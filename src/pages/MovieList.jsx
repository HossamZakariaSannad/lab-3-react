import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../componets/MovieCard";
import { axiosInstance } from "../api/config";
export default function MovieList() {
  const [movies, setMovies] = useState();
  const [FilteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    axiosInstance
    .get()
    .then((response) => {
      setMovies(response.data.results)
      setFilteredMovies(response.data.results)
      
    })
    .catch((err) => console.log(err));
  }, []);
  
  const handelSearch = (event) => {
    const searchVal = event.target.value;
    console.log(searchVal);
    if(!searchVal)
    {
      setFilteredMovies(movies);
    }
    else
    {
      //filter function 
      const filteredMovies = movies?.filter(  (movieEle)=> {return movieEle.title.toLowerCase().includes(searchVal.toLowerCase() )}  )
      setFilteredMovies(filteredMovies)
    }
  };
  // const handelSearchN = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.one)
  //   //one is the name or id of child of form event.target is the form 
  //     }

  return (
    

   <> 
  {/* onSubmit={handelSearchN} 
  it's target is a form , so we return it's child by thier .name .id values */}

   <form className="d-flex" role="search"   >
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="one"  onChange={(e) => handelSearch(e)}  />
    <button className="btn btn-outline-success" type="submit"  >Search</button>
  </form>

    <div className="row row-cols-1 row-cols-md-3 g-4"> 
    {/* movie card */}
    {FilteredMovies?.map((movieElement) => (
        <div className="col" key={movieElement.id}>
            {/* {console.log(movieElement.id)} */}
        <MovieCard movieElement={movieElement} key={movieElement.id}/>
      </div>
    ))}
    </div>
    </>
  );
}

