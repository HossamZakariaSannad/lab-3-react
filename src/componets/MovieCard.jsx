import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { decreaseCounter, increaseCounter, resetCounter } from '../store/slices/counter';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchListcart'

export default function MovieCard(props) {
  const {movieElement,cardid} = props;
  // console.log(cardid);
  const navigate = useNavigate();
  const handleRedirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };
const counterVal = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const movieArray = useSelector((state) => state.fav.value);

  const handleAddClick = () => {
    // Check if the movie is already in the watchlist to avoid duplicates
    const isAlreadyInWatchlist = movieArray.some((movie) => movie.id === movieElement.id);
  
    if (!isAlreadyInWatchlist) {
      dispatch(addToWatchlist(movieElement));
       dispatch(increaseCounter(counterVal+1))
    } else {
      alert("Movie is already in the watchlist");
    }
  };
  const handelDeleteClick = () => {
    // Check if the movie is in the watchlist
    const isInWatchlist = movieArray.some((movie) => movie.id === movieElement.id);
  
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movieElement.id));
      if (counterVal >= 1) {
        dispatch(decreaseCounter(counterVal - 1));
      }
    } else {
      alert("Movie is not in the watchlist ");
    }
  };
  
  return (
    <div className="card my-3">
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
        <button
          className="btn btn-success mx-2"
          onClick={() => handleAddClick()}
        >
          Add to Watch list 
        </button>
        <button
          className="btn btn-danger mx-2 my-2"
          onClick={() => handelDeleteClick()}
        >
          Remove From Watch List 
        </button>
      </div>
    </div>
  );
}
