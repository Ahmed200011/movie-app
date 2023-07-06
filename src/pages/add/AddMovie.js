import React from "react";
import "./AddMovie.css"

const AddMovie = () => {
  return (
    <div className="add-movie">
      <div className="container">
        <div className="contant">
          <div className="input-contant">
          <input type="text" className="form__field" placeholder="Search for a Movie"/>  
           
          </div>
          <ul className="result"></ul>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
