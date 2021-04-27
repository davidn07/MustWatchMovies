import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

const Index = (props) => {
  const { movies } = props.movies;

  const handleDetails = (movie) => {
    props.history.push({
      pathname: `/movie-details/${movie.name}`,
      state: { movie },
    });
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Top Movies Must Watch</h3>
      <div className="row">
        {_.map(movies, (movie, id) => {
          return (
            <div key={id} className="col-md-6 col-12">
              <div className="card w-100 d-flex flex-row mt-3 align-items-start card-style">
                <img
                  src={movie.banner}
                  alt="banner"
                  className="h-100 image-style"
                  width="100"
                />
                <div className="p-1 pl-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{movie.name}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDetails(movie)}
                    >
                      Details
                    </button>
                  </div>
                  <small>{movie.description}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(Index);
