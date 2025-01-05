import React from 'react'
import { useNavigate } from 'react-router';


export default function MovieCard(props) {
    const {movieElement} = props;
    const navigate = useNavigate();
    const handleRedirectToDetails = (id) => {
        navigate(`/movie-details/${id}`);
      };
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieElement.poster_path}`}
        className="card-img-top"
        alt="..."
      />
     
      <div className="card-body">
        <h5 className="card-title">{movieElement.original_title}</h5>
        
        <button
          className="btn btn-primary"
          onClick={() => handleRedirectToDetails(movieElement.id)}
        >
          View
        </button>
      </div>
    </div>
  );
}
