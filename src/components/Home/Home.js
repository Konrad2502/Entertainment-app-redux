import React from 'react';
import { ReactComponent as SearchkIcon } from '../../assets/icon-search.svg';
import './Home.scss';
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";


export default function Home() {

 const trendingItems = useSelector((state) => 
 state.data.items.filter(item => item.isTrending === true)
);
console.log(trendingItems)
  return (
    <div className='home'>
        <div className="home__search">
             <SearchkIcon className='home__search-icon'/>
            <input type="text" className="home__search-input" placeholder='Search for movies or Tv series'/>   
        </div>
        <div className="trending">
            <div className="trending__title">Trending</div>
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
    </div>
  )
}
