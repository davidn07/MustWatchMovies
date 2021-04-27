import "./App.css";
import Navbar from "components/Navbar";
import MoviesList from "pages/MoviesList";
import MovieDetails from "pages/MovieDetails";
import AddMovie from "pages/AddMovie";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/add-movie" component={AddMovie} />
        <Route
          exact
          path="/movie-details/:moviename"
          component={MovieDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
