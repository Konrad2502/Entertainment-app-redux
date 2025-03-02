import React from 'react';
import { useSelector } from "react-redux";
import './Movie.scss';
import NoResult from '../NoResult/NoResult';
import MovieItem from './MovieItem';



export default function Movie() {

    const movieItems = useSelector((state) => 
    state.data.items.filter(item => item.category === 'Movie')
    )
   
    const searchQuery = useSelector(state => state.search);
    const filteredMovies = movieItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
   
  return (
    <div className="movie">
                <div className="movie__title">Movies</div>
                <div className="movie__content">
                    {filteredMovies.length === 0 ? <NoResult/> : filteredMovies.map(item => (
                       <MovieItem id={item.id} item={item}/>
                    ))}
                    {}
                </div>
            </div>
  )
}
