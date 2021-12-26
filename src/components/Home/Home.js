import axios from 'axios';
import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/api/movieApi';
import { apiKey } from '../../common/api/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
export default function Home() {

    const dispatch  = useDispatch();
    useEffect(() => {
        const movieText = "Harry";
        const fetchMovies = async () => {
            const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apiKey=${apiKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log(err)
                })
                dispatch(addMovies(response.data))
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
