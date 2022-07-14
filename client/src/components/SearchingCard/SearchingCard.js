import React from "react";
import MoreInfo from "../common/MoreInfo/MoreInfo";
import Welcome from "../common/Welcome/Welcome";
import Searchbar from "./Searchbar/Searchbar";
import "./SearchingCard.css";

function SearchingCard({ setCity, weatherObject }) {
  const { lon, lat } = weatherObject.location || {};
  const { last_updated } = weatherObject.current || {};
  const childProps ={
    lon,
    lat,
    last_updated
  }
  return (
    <div className="searchingCard_container">
        <Welcome />
        <Searchbar  />
        <MoreInfo {...childProps} />
    </div>
  );
}

export default SearchingCard;
