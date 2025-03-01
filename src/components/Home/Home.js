import React from 'react';
import './Home.scss';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkFull } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { toogleItems } from '../../features/selectedItemsSlice';




export default function Home() {

const dispatch = useDispatch();


 const trendingItems = useSelector((state) => 
 state.data.items.filter(item => item.isTrending === true)
);

const everyItems = useSelector(state => state.data.items);
const bookmarkedMovies = useSelector(state => state.selectedItems.movies);
const bookmarkedTvSeries = useSelector(state => state.selectedItems.tvseries);
const searchQuery = useSelector(state => state.search);
const filteredItems = everyItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
)

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
    <div className='home'>
        <div className="trending">
            <h2 className="trending__title">Trending</h2>
            <Swiper
           modules={[Navigation]}
           spaceBetween={16}
           slidesPerView={2}
           navigation
           grabCursor={true}
         
          className="trending__content"
        >
            {trendingItems.map(item => (
                <SwiperSlide key={item.id}>
                      <div className="trending__item">
                    <img src={item.thumbnail.trending.large} alt={item.title} className="trending__item-img" />
                    <div className="trending__section">
                        <div className="trending__elements">
                            <div className="trending__element-year">{item.year}</div>
                            <div className="trending__element">
                                {item.category === 'Movie' ? (<MovieIcon className="trending__element-icon trending__element-icon--tv"/>) : (<TvIcon className="trending__element-icon"/>)}
                                <div className="trending__element-category">{item.category}</div>
                            </div>
                            <div className="trending__element-rating">{item.rating}</div>
                        </div>
                        <div className="trending__section-title">{item.title}</div>
                    </div>
                    <div             
                    className="trending__item-icon"
                    onClick={() => handleBookmarkClick(item)}
                    >
                    {isBookmarked(item) ? <BookmarkFull /> : <BookmarkEmpty />}           
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="recommended">
            <div className="recommended__title">Recommended for you</div>
            <div className="recommended__content">
                {filteredItems.map(item => (
                    <div key={item.id} className="recommended__item">
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
                ))}
            </div>
        </div>
    </div>
   
  )
}
