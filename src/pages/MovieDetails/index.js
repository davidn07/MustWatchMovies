import React from "react";
import _ from "lodash";

const Index = (props) => {
  const { movie } = props.location.state;

  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-4">
        <img src={movie?.banner} alt="banner" height="400" />
      </div>
      <div>
        <h4 className="mt-3">{movie.name + ` (${movie.release})`} </h4>
        <p className="w-75">{movie.description}</p>
        <h6>Cast : {_.map(movie.cast, (name) => `${name}, `)}</h6>
      </div>
    </div>
  );
};

export default Index;
