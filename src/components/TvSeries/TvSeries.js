import React from "react";
import { useSelector } from "react-redux";
import "./TvSeries.scss";
import NoResult from "../NoResult/NoResult";
import TvSeriesItem from "./TvSeriesItem";
import { useDispatch } from "react-redux";
import { setCurrentItem } from "../../features/currentItemSlice";

export default function TvSeries({ setIsItemVisible }) {
  const dispatch = useDispatch();

  const tvseriesItems = useSelector((state) =>
    state.data.items.filter((item) => item.category === "TV Series")
  );
  const searchQuery = useSelector((state) => state.search);
  const filteredTvseries = tvseriesItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCurrentItem = (item) => {
    dispatch(setCurrentItem(item));
    setIsItemVisible(true);
  };

  return (
    <div className="tvseries">
      <div className="tvseries__title">TV Series</div>
      <div className="tvseries__content">
        {filteredTvseries.length === 0 ? (
          <NoResult />
        ) : (
          filteredTvseries.map((item) => (
            <TvSeriesItem
              onClick={() => handleCurrentItem(item)}
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>
    </div>
  );
}
