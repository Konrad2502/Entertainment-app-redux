import React from 'react';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import { useSelector, useDispatch } from "react-redux";
import { toogleItems } from '../../features/selectedItemsSlice';

export default function TvSeriesItem({item}) {

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
    <div  className="tvseries__item">
    <div className="tvseries__picture">
        <img src={item.thumbnail.regular.small} alt={item.title} className="tvseries__picture-img" />
        <div 
        onClick={() => handleBookmarkClick(item)}
        className="tvseries__picture-icon">
            {isBookmarked(item) ? <BookmarkFull /> : <BookmarkEmpty />}
            </div>
        <div className="tvseries__overlay">
        <div className="tvseries__play">
            <PlayIcon className='tvseries__play-icon'/>
            <div className="tvseries__play-text">Play</div>
        </div>
        </div>
    </div>
    <div className="tvseries__section">
        <div className="tvseries__details">
            <div className="tvseries__detail-year">{item.year}</div>
            <div className="tvseries__detail">
                {item.category === 'Movie' ? ( <MovieIcon className='tvseries__detail-icon'/>) : (<TvIcon className='tvseries__detail-icon'/>)}
                <div className="tvseries__detail-category">{item.category}</div>
            </div>
            <div className="tvseries__detail-rating">{item.rating}</div>
        </div>
        <div className="tvseries__section-title">{item.title}</div>
    </div>
</div>
  )
}
