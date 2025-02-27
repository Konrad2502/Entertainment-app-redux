import React from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import './Movie.scss';
import { useDispatch } from 'react-redux';
import { toogleItems } from '../../features/selectedItemsSlice';



export default function Movie() {

    const dispatch = useDispatch();


    const movieItems = useSelector((state) => 
    state.data.items.filter(item => item.category === 'Movie')
    )
    const bookmarkedMovies = useSelector(state => state.selectedItems.movies);
    const bookmarkedTvSeries = useSelector(state => state.selectedItems.tvseries);
   
    const isBookmarked = (item) => {
        if (item.category === 'Movie') {
            return bookmarkedMovies.some(movie => movie.id === item.id);
        } else if (item.category === 'TV Series') {
            return bookmarkedTvSeries.some(series => series.id === item.id);
        }
        return false;
    };
    
    const handleBookmarkClick = (item) => {
        dispatch(toogleItems(item))
    };
  return (
    <div className="movie">
                <div className="movie__title">Movies</div>
                <div className="movie__content">
                    {movieItems.map(item => (
                        <div key={item.id} className="movie__item">
                        <div className="movie__picture">
                            <img src={item.thumbnail.regular.small} alt={item.title} className="movie__picture-img" />
                            <div 
                            onClick={() => handleBookmarkClick(item)}
                            className="movie__picture-icon">
                                 {isBookmarked(item) ? <BookmarkFull /> : <BookmarkEmpty />}   
                                </div>
                            <div className="movie__overlay">
                            <div className="movie__play">
                                <PlayIcon className='movie__play-icon'/>
                                <div className="movie__play-text">Play</div>
                            </div>
                            </div>
                        </div>
                        <div className="movie__section">
                            <div className="movie__details">
                                <div className="movie__detail-year">{item.year}</div>
                                <div className="movie__detail">
                                    {item.category === 'Movie' ? ( <MovieIcon className='movie__detail-icon'/>) : (<TvIcon className='movie__detail-icon'/>)}
                                    <div className="movie__detail-category">{item.category}</div>
                                </div>
                                <div className="movie__detail-rating">{item.rating}</div>
                            </div>
                            <div className="movie__section-title">{item.title}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
  )
}
