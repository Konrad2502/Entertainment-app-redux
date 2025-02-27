import React from 'react';
import './Nav.scss';
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg';
import { ReactComponent as MoviesIcon } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TvIcon } from '../../assets/icon-nav-tv-series.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg';
import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <div className='nav'>
        <div className="nav__logo">
            <img src="/assets/logo.svg" alt="Logo Icon" />
        </div>
        <div className="nav__content">
            <div className="nav__icons">
                <NavLink to='/' className={({ isActive }) => isActive ? "nav__icons-icon nav__icons-icon--active" : "nav__icons-icon"}>
                    <HomeIcon className="nav__icons-svg" />
                </NavLink>
                <NavLink to='/movie' className={({ isActive }) => isActive ? "nav__icons-icon nav__icons-icon--active" : "nav__icons-icon"}>
                    <MoviesIcon className='nav__icons-svg'/>
                </NavLink>
                <NavLink to='tvseries' className={({ isActive }) => isActive ? "nav__icons-icon nav__icons-icon--active" : "nav__icons-icon"}>
                    <TvIcon className='nav__icons-svg'/>
                </NavLink>
                <NavLink to='bookmark' className={({ isActive }) => isActive ? "nav__icons-icon nav__icons-icon--active" : "nav__icons-icon"}>
                    <BookmarkIcon className='nav__icons-svg'/>
                </NavLink>
            </div>
            <div className="nav__avatar">
                <img src="/assets/image-avatar.png" alt="Avatar" />
            </div>
        </div>
    </div>
  )
}
