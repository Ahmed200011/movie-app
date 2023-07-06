import React, { useEffect, useState } from "react";
import "./AddMovie.css";
import axios from "axios";

const AddMovie = () => {
  const [input, setinput] = useState("");
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    // `http://www.omdbapi.com/?s=${input}8&apikey=5ece9b0e`
    //
    axios
      .get(
        `http://www.omdbapi.com/?${
          input ? `s=${input}` : `i=tt3896198`
        }&apikey=5ece9b0e`
      )
      .then((reposns) => {
        if (reposns.data.Search) {
          setmovies(reposns.data.Search);
          // console.log(movies)
        }
      })
      .catch((erroe) => {
        console.log(erroe);
      });
  }, [input]);
  return (
    <div className="add-movie">
      <div className="container">
        <div className="contant">
          <div className="input-contant">
            <input
              type="text"
              className="form__field"
              placeholder="Search for a Movie"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="result">
              {movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <div className="curd">
                      <div className="wrapper">
                      {movie.Poster?<img className="img" src={movie.Poster} alt={movie.Title}/>:<img className="img" src="/src/image/not-found.png" alt="not-found"/>}
                      
                        <h1> {movie.Title}</h1>
                        <p>
                          {movie.Year}
                        </p>
                      </div>
                    </div>

                    <div className="button-wrapper">
                      <button className="btn2 fill">DETAILS</button>
                      <button className="btn2 fill">BUY NOW</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
