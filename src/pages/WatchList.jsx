import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../componets/MovieCard';

export default function WatchList() {

  const movieArray = useSelector((state) => state.fav.value);
  // console.log(movieArray)
  return (

    <div className="row row-cols-1 row-cols-md-3 g-4"> 
        {/* movie card */}
        {movieArray?.map((movieElement) => (
            <div className="col" key={movieElement.id}>
                {/* {console.log(movieElement.id)} */}
            <MovieCard movieElement={movieElement} key={movieElement.id}/>
          </div>
        ))}
        </div>
        
  )
}
