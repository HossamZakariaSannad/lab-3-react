
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

export default function MovieDetails() {
    const params = useParams();
    // console.log(params.id)
  const [movies, setMovies] = useState();
useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c4d05e8d26c497586d952c92ab0f2ab5`
      )
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
      
  }, []);
//   console.log(movies?.id)

const navigate = useNavigate();
const handleRedirectToHome = () => {
    navigate(`/`);
}
  return (
    <div className="card">
    <img
      src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{movies?.original_title}</h5>
      <p className="card-text"> {movies?.overview}.</p> 
      <p className="card-text"> <b>Language :</b>  {movies?.original_language}.</p>
      <p className="card-text"> <b>Release Date</b> : {movies?.release_date}.</p>
      <p className="card-text"> <b>Rate</b> : {movies?.vote_average}.</p>
      <p className="card-text"> <b>Voters</b> :  {movies?.vote_count}.</p>
      <button
        className="btn btn-primary"
        onClick={() => handleRedirectToHome()}
      >
        Back
      </button>
    </div>
  </div>
  )
}
