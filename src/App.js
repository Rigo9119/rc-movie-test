import React, { useEffect, useState } from 'react';
import getMovies from './data/data';
// components
import Movies from './components/movies/movies';
import SearchBar from './components/searchBar/searchBar'; 
import Rating from './components/rating/rating';
import Footer from './components/footer/footer';
import Header from './components/header/header';
// Utils
import { starsAverage } from './utils/constants';
// Styles 
import { AppWrapper, Main, MainActions, Message } from './App.styled';


function App() {
  
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [stars, setStars] = useState(0);

  useEffect(() => {
    function fetchMovies() {
      const actionValidation = query.length > 0 ? 'search' : 'discover';
      
      getMovies(actionValidation, query, starsAverage[stars - 1])
        .then(data =>{ setMovies(data) })
        .catch(error => console.log('client error 🔥💻:>>', error))
    }

    fetchMovies()
  }, [query, stars]);

  const handleSearch = event => setQuery(event.target.value);

  return (
    <AppWrapper>
      <Header />
      <Main>
        <MainActions>
            <SearchBar
              value={query}
              onChange={handleSearch}
            />
            <Rating 
              value={stars}
              onChange={stars => setStars(stars)}

            />
        </MainActions>
        {movies.length === 0 ?
          <Message>No movies to be display</Message>
          :
          <Movies movies={movies}/>
        }
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
