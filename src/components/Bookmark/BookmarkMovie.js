import React from "react";
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import { toogleItems} from '../../features/selectedItemsSlice';
import { useDispatch } from "react-redux";


 
 

export default function BookmarkMovie({item}) {

    const dispatch = useDispatch();

    const handleBookmarkClick = (item) => {
        dispatch(toogleItems(item))
    };
  return (
    <div className="bookmark-movie__item">
      <div className="bookmark-movie__picture">
        <img
          src={item.thumbnail.regular.small}
          alt={item.title}
          className="movie__picture-img"
        />
        <div
          onClick={() => handleBookmarkClick(item)}
          className="bookmark-movie__picture-icon"
        >
          <BookmarkFull />
        </div>
        <div className="bookmark-movie__overlay">
          <div className="bookmark-movie__play">
            <PlayIcon className="bookmark-movie__play-icon" />
            <div className="bookmark-movie__play-text">Play</div>
          </div>
        </div>
      </div>
      <div className="bookmark-movie__section">
        <div className="bookmark-movie__details">
          <div className="bookmark-movie__detail-year">{item.year}</div>
          <div className="bookmark-movie__detail">
            {item.category === "Movie" ? (
              <MovieIcon className="bookmark-movie__detail-icon" />
            ) : (
              <TvIcon className="bookmark-movie__detail-icon" />
            )}
            <div className="bookmark-movie__detail-category">
              {item.category}
            </div>
          </div>
          <div className="bookmark-movie__detail-rating">{item.rating}</div>
        </div>
        <div className="bookmark-movie__section-title">{item.title}</div>
      </div>
    </div>
  );
}
