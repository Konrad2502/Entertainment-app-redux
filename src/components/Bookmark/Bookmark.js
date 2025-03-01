import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import './Bookmark.scss';
import { toogleItems, removeAll } from '../../features/selectedItemsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


export default function Bookmark() {

    const dispatch = useDispatch();
 
    const bookMarkMovies = useSelector(state => state.selectedItems.movies);
    const bookMarkTvseries = useSelector(state => state.selectedItems.tvseries);

     const searchQuery = useSelector(state => state.search);
        const filteredBookmarkMovies = bookMarkMovies.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        const filteredBookmarkTvseries = bookMarkTvseries.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

    const handleBookmarkClick = (item) => {
        dispatch(toogleItems(item))
    };
    const handleClearAll = (category) => {
        dispatch(removeAll(category))
    }

   
  return (
    <div className='bookmark'>
        <div className="bookmark-movie">
                    <div className="bookmark-movie__title">Bookmarked Movies</div>
                    <div className="bookmark-movie__content">
                        {filteredBookmarkMovies.length === 0 ? <div className='bookmark-movie__empty'>
                            <FontAwesomeIcon className='bookmark-movie__empty-icon' icon={faFolderOpen} />
                            Movie list is empty</div> :
                            bookMarkMovies.map(item => (
                                <div key={item.id} className="bookmark-movie__item">
                                <div className="bookmark-movie__picture">
                                    <img src={item.thumbnail.regular.small} alt={item.title} className="movie__picture-img" />
                                    <div 
                                    onClick={() => handleBookmarkClick(item)}
                                    className="bookmark-movie__picture-icon"><BookmarkFull/></div>
                                    <div className="bookmark-movie__overlay">
                                    <div className="bookmark-movie__play">
                                        <PlayIcon className='bookmark-movie__play-icon'/>
                                        <div className="bookmark-movie__play-text">Play</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="bookmark-movie__section">
                                    <div className="bookmark-movie__details">
                                        <div className="bookmark-movie__detail-year">{item.year}</div>
                                        <div className="bookmark-movie__detail">
                                            {item.category === 'Movie' ? ( <MovieIcon className='bookmark-movie__detail-icon'/>) : (<TvIcon className='bookmark-movie__detail-icon'/>)}
                                            <div className="bookmark-movie__detail-category">{item.category}</div>
                                        </div>
                                        <div className="bookmark-movie__detail-rating">{item.rating}</div>
                                    </div>
                                    <div className="bookmark-movie__section-title">{item.title}</div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    {bookMarkMovies.length !== 0 ? 
                      <button 
                      onClick={() => handleClearAll('Movie')}
                      className='bookmark__btn'>Clear all</button>
                      : ''
                }
                </div>
                <div className="bookmark-tvseries">
                    <div className="bookmark-tvseries__title">Bookmarked TV Series</div>
                    <div className="bookmark-tvseries__content">
                        {filteredBookmarkTvseries.length === 0 ? <div className='bookmark-tvseries__empty'>
                            <FontAwesomeIcon className='bookmark-tvseries__empty-icon' icon={faFolderOpen} />
                            Tvseries list is empty 
                        </div> : bookMarkTvseries.map(item => (
                            <div key={item.id} className="bookmark-tvseries__item">
                            <div className="bookmark-tvseries__picture">
                                <img src={item.thumbnail.regular.small} alt={item.title} className="movie__picture-img" />
                                <div 
                                 onClick={() => handleBookmarkClick(item)}
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
                        ))}
                    </div>
                    {bookMarkTvseries.length !== 0 ? 
                     <button 
                     onClick={() => handleClearAll('TV Series')}
                     className='bookmark__btn'>Clear all</button> : ''
                }   
                </div>
                </div>
  )
}
