import React from 'react';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { useDispatch, useSelector } from "react-redux";
import { toogleItems } from '../../features/selectedItemsSlice';

export default function HomeItem({item}) {

   const dispatch = useDispatch();

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
    <div className="recommended__item">
    <div className="recommended__picture">
        <img src={item.thumbnail.regular.small} alt={item.title} className="recommended__picture-img" />
        <div 
        onClick={() => handleBookmarkClick(item)}
        className="recommended__picture-icon">
              {isBookmarked(item) ? <BookmarkFull /> : <BookmarkEmpty />}
            </div>
        <div className="recommended__overlay">
        <div className="recommended__play">
            <PlayIcon className='recommended__play-icon'/>
            <div className="recommended__play-text">Play</div>
        </div>
        </div>
    </div>
    <div className="recommended__section">
        <div className="recommended__details">
            <div className="recommended__detail-year">{item.year}</div>
            <div className="recommended__detail">
                {item.category === 'Movie' ? ( <MovieIcon className='recommended__detail-icon'/>) : (<TvIcon className='recommended__detail-icon'/>)}
                <div className="recommended__detail-category">{item.category}</div>
            </div>
            <div className="recommended__detail-rating">{item.rating}</div>
        </div>
        <div className="recommended__section-title">{item.title}</div>
    </div>
</div>
  )
}
