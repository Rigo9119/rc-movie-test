import React from 'react';
import PropTypes from 'prop-types';
// Components
import MovieCard from '../movieCard/movieCard';
// styles
import { MoviesWrapper } from './movies.styled';

const Movies = ({ movies }) => {

    return (
        <MoviesWrapper>
            {movies.map(movie => (
                    <MovieCard 
                        imageUrl={movie.imgUrl}
                        key={movie.id}
                        movieTitle={movie.title}
                        overview={movie.overview}
                        releaseDate={movie.release_date}
                    />
                )
            )} 
        </MoviesWrapper>
    );
};


Movies.propTypes = {
    movies: PropTypes.array
};


export default Movies;
