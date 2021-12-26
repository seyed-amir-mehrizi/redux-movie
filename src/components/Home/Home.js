import axios from 'axios';
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/api/movieApi';
import { apiKey } from '../../common/api/movieApiKey';
export default function Home() {

    useEffect(() => {
        const movieText = "Harry"
        const fetchMovies = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apiKey=${apiKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log(err)
                })
                console.log(response);
        }
        fetchMovies();
    }, []);
    return (
        <div>
            <div className='banner-image'></div>
            <MovieListing />
        </div>

    )
}
