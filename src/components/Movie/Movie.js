import React from 'react';
import { useSelector } from "react-redux";
import './Movie.scss';
import NoResult from '../NoResult/NoResult';
import MovieItem from './MovieItem';
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../features/currentItemSlice';



export default function Movie({setIsItemVisible}) {;

  const dispatch = useDispatch()

    const movieItems = useSelector((state) => 
    state.data.items.filter(item => item.category === 'Movie')
    )
   
    const searchQuery = useSelector(state => state.search);
    const filteredMovies = movieItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleCurrentItem = (item) => {
        dispatch(setCurrentItem(item));
        setIsItemVisible(true)
    }
   
  return (
    <div className="movie">
                <div className="movie__title">Movies</div>
                <div className="movie__content">
                    {filteredMovies.length === 0 ? <NoResult/> : filteredMovies.map(item => (
                       <MovieItem
                       onClick={() => handleCurrentItem(item)}
                       key={item.id} 
                       item={item}/>
                    ))}
                    {}
                </div>
            </div>
  )
}
