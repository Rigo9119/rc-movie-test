import React, { useState } from "react";
import PropTypes from "prop-types";
// styles
import {
    MovieCardFront,
    MovieCardPoster,
    MovieCardTitle,
    MovieCardData,
    MovieToggle,
    MovieCardBack,
    MovieDate,
    MovieOverview
} from "./movieCard.styled.js";

const MovieCard = ({ movieTitle, releaseDate, overview, imageUrl }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            { toggle === false ? 
                <MovieCardFront>
                    <MovieCardPoster src={imageUrl} alt={movieTitle} />
                    <MovieCardData>
                        <MovieCardTitle>{movieTitle}</MovieCardTitle>
                        <MovieToggle
                            onClick={() => setToggle(!toggle)}
                        >
                            View more
                        </MovieToggle>
                    </MovieCardData>
                </MovieCardFront>
                : 
                <MovieCardBack>
                    <MovieCardTitle>{movieTitle}</MovieCardTitle>
                    <MovieDate>{releaseDate}</MovieDate>
                    <MovieOverview>{overview}</MovieOverview>
                    <MovieToggle
                        onClick={() => setToggle(!toggle)}
                    >
                        Close
                    </MovieToggle>
                </MovieCardBack>
            } 
        </>
    );
};

MovieCard.propTypes = {
    image: PropTypes.string,
    movieTitle: PropTypes.string,
    releaseDate: PropTypes.string,
    overview: PropTypes.string,
};

export default MovieCard;
