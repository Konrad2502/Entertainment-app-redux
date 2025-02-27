import React from 'react';
import { ReactComponent as SearchkIcon } from '../../assets/icon-search.svg';
import './SearchInput.scss';

export default function SearchInput() {
  return (
    <div className="home__search">
        <SearchkIcon className='home__search-icon'/>
   <    input type="text" className="home__search-input" placeholder='Search for movies or Tv series'/>   
</div>
  )
}
