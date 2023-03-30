import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import './MovieList.css'

import { useParams } from "react-router-dom";

const MovieList = () => {

    const [MovieList , setMovieList] = useState([])
    const {type}= useParams();

    useEffect( () => {
        getData();
    },[])

    useEffect ( () => {
        getData();

    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
return(
    <>
    <div className="movie__list">
        <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                MovieList.map( movie => (
                    <Card movie={movie} />
                ))
            }
        </div>
    </div>

    </>
)


} 


export default MovieList