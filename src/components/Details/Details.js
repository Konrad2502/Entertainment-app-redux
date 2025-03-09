import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Details.scss";
import { useSelector } from "react-redux";

export default function Details({ setIsItemVisible, isItemVisible }) {
  const item = useSelector((state) => state.currentItems);

  return item ? (
    <div
      className={`details__leyer ${
        isItemVisible ? "details__leyer--visible" : ""
      }`}
    >
      <div className="details">
        <div className="details__img">
          <img
            className="details__img-picture"
            src={item.thumbnail.regular.large}
            alt={item.title}
          />
        </div>
        <div className="details__items">
          <div className="details__item-year">{item.year}</div>
          <div className="details__item">
            <MovieIcon className="details__item-icon" />
            <div className="details__item-category">{item.category}</div>
          </div>
          <div className="details__item-rating">{item.rating}</div>
        </div>
        <div className="details__title">{item.title}</div>
        <div className="details__stars">
          {[...Array(Number(item.stars))].map((_, i) => (
            <FontAwesomeIcon key={i} color="#FFD700" icon={faStar} />
          ))}
        </div>
        <div className="details__description">{item.description}</div>
        <button
          onClick={() => setIsItemVisible(false)}
          className="details__btn"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
}
