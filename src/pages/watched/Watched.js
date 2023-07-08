import React from 'react'
import { useMovieContext } from '../../context/Conte';
import "./Watched.css"
import * as actions from "../../context/ActionTyps";

const Watch = () => {
  const movieContext=useMovieContext()
  return (
    <div className="watched-movie">
    <div className="container">
      <div className="contant">
      <div className='list-header'>
      <h1>Watched list </h1>
      <span className='number'>{movieContext.watched.length} :{movieContext.watched.length===1?"Movie":"Movies"}</span>
      </div>
       
        {movieContext.watched.length > 0 ? (
          <ul className="movie-list">
            {movieContext.watched.map((movie) => {
             
              
              return (
                <li key={movie.imdbID}>
                  <div className="curd">
                    <div className="wrapper">
                      {movie.Poster ? (
                        <img
                          className="img"
                          src={movie.Poster}
                          alt={movie.Title}
                        />
                      ) : (
                        <img
                          className="img"
                          src="./not-found.png"
                          alt="not-found"
                        />
                      )}

                      <h1> {movie.Title}</h1>
                      <p>{movie.Year}</p>
                    </div>

                    <div className="button-wrapper">
                   <button
                      onClick={() =>
                        movieContext.moviesDispatch({
                          type: actions.MOVE_TO_WATCHLIST,
                          payload: movie,
                          
                        })
                      }
                      className="btn2 fill"
                      // disabled={watchListDisabled}
                    >
                    <i className="fa-regular fa-eye-slash fa-bounce"></i>
                    
                    </button>
                    <button
                      onClick={() =>
                        movieContext.moviesDispatch({
                          type: actions.REMOVE_MOVIE_FROM_WATCHED,
                          payload: movie.imdbID,
                        })
                      }
                      className="btn2 fill"
                      // disabled={watchedDisabled}
                    >
                    <i className="fa-regular fa-trash-can fa-bounce"></i>
                    </button> 
                  </div>
                  </div>

                  
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="noMovies">
            <h1>No movies in your list </h1>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Watch
