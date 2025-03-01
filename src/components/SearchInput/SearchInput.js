import React from 'react';
import { ReactComponent as SearchkIcon } from '../../assets/icon-search.svg';
import './SearchInput.scss';
import { useDispatch } from 'react-redux';
import { searchItems } from '../../features/searchSlice';

export default function SearchInput() {
    const dispatch = useDispatch();
 
    const handleInput = (event) => {
        dispatch(searchItems(event.target.value))
    }

  return (
    <div className="home__search">
        <SearchkIcon className='home__search-icon'/>
        <input 
            onChange={handleInput}
            type="text" 
            className="home__search-input" 
            placeholder='Search for movies or Tv series'/>   
    </div>
  )
}
