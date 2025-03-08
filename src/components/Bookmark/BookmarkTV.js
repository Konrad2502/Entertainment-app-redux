import React from "react";
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import { toogleItems} from '../../features/selectedItemsSlice';
import { useDispatch } from "react-redux";



 
 export default function BookmarkTV({item, handleCurrentItem}) {

    const dispatch = useDispatch();

    const handleBookmarkClick = (event,item) => {
        event.stopPropagation();
        dispatch(toogleItems(item))
    };
   return (
    <div 
    onClick={() => handleCurrentItem(item)}
    className="bookmark-tvseries__item">
    <div className="bookmark-tvseries__picture">
        <img src={item.thumbnail.regular.small} alt={item.title} className="movie__picture-img" />
        <div 
         onClick={(e) => handleBookmarkClick(e,item)}
        className="bookmark-tvseries__picture-icon"><BookmarkFull/></div>
        <div className="bookmark-tvseries__overlay">
        <div className="bookmark-tvseries__play">
            <PlayIcon className='bookmark-tvseries__play-icon'/>
            <div className="bookmark-tvseries__play-text">Play</div>
        </div>
        </div>
    </div>
    <div className="bookmark-tvseries__section">
        <div className="bookmark-tvseries__details">
            <div className="bookmark-tvseries__detail-year">{item.year}</div>
            <div className="bookmark-tvseries__detail">
                {item.category === 'Movie' ? ( <MovieIcon className='bookmark-tvseries__detail-icon'/>) : (<TvIcon className='bookmark-tvseries__detail-icon'/>)}
                <div className="bookmark-tvseries__detail-category">{item.category}</div>
            </div>
            <div className="bookmark-tvseries__detail-rating">{item.rating}</div>
        </div>
        <div className="bookmark-tvseries__section-title">{item.title}</div>
    </div>
</div>
   )
 }
 