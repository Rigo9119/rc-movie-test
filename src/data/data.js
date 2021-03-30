const axios = require('axios');

const baseUrl = 'https://api.themoviedb.org/3';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const api_key = '7b304b6001397ed6ba7f34504acc7e6e';


async function getMovies(action, query, starsMinMax) {
    let data;
    const queryContent = action === 'search' ? {query} : {}

    try {
        const res = await axios({
            url: `${baseUrl}/${action}/movie`,
            params: {
                api_key: api_key,
                ...queryContent
            }
        })

        data = res.data.results.map(movie => {
            return {
                ...movie,
                imgUrl: `${baseImgUrl}/${movie.poster_path}`
            }
        });

        if(starsMinMax !== undefined) {
            data = data.filter(movie => {
                const movieRange = (movie.vote_average >= starsMinMax.min && movie.vote_average <= starsMinMax.max);
                return movieRange ? movie : null;
            })
        }

        return data 
    } catch (error) {
        console.log('netwrok error 🌍🔥:>> ', error);
    }
}
export default getMovies
