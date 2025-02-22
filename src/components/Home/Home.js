import React from 'react';
import { ReactComponent as SearchkIcon } from '../../assets/icon-search.svg';
import './Home.scss';
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from '../../assets/icon-play.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";


export default function Home() {

 const trendingItems = useSelector((state) => 
 state.data.items.filter(item => item.isTrending === true)
);

const everyItems = useSelector(state => state.data.items);


  return (
    <div className="content">
         <div className="home__search">
             <SearchkIcon className='home__search-icon'/>
            <input type="text" className="home__search-input" placeholder='Search for movies or Tv series'/>   
        </div>
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
                    <div className="trending__item-icon"><BookmarkEmpty/></div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="recommended">
            <div className="recommended__title">Recommended for you</div>
            <div className="recommended__content">
                {everyItems.map(item => (
                    <div key={item.id} className="recommended__item">
                    <div className="recommended__picture">
                        <img src={item.thumbnail.regular.small} alt={item.title} className="recommended__picture-img" />
                        <div className="recommended__picture-icon"><BookmarkEmpty/></div>
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
    </div>
  )
}
