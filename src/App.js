
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import {MoviesData} from './Data';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Trailer from './components/trailer';
function App() {
 const [movies, setMovies] = useState(MoviesData)
  return (
    <div className="App">
      <BrowserRouter>
      <switch>
        <Route exact path='/' render={()=> <MovieList movies={movies}/> }/>
        <Route path='/trailer/:name' render={(props)=><Trailer movies={movies} {...props}/>}/>
     
     </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
