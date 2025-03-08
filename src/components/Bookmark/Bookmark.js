import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Bookmark.scss';
import { removeAll } from '../../features/selectedItemsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import BookmarkMovie from './BookmarkMovie';
import BookmarkTV from './BookmarkTV';
import { setCurrentItem } from '../../features/currentItemSlice';


export default function Bookmark({setIsItemVisible}) {

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

   
    const handleClearAll = (category) => {
        dispatch(removeAll(category))
    }

     const handleCurrentItem = (item) => {
            dispatch(setCurrentItem(item));
            setIsItemVisible(true)
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
                              <BookmarkMovie 
                              handleCurrentItem={handleCurrentItem}
                              key={item.id} 
                              item={item}/>
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
                            <BookmarkTV 
                            handleCurrentItem={handleCurrentItem}
                            key={item.id} 
                            item={item}/>
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
