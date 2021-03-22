
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import {MoviesData} from './Data';
import { useState } from 'react';
function App() {
 const [movies, setMovies] = useState(MoviesData)
  return (
    <div className="App">
     <MovieList movies={movies}/>
    </div>
  );
}

export default App;
