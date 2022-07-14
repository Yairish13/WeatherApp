import React from "react";
import "./MoreInfo.css";

const MoreInfo = ({ lon, lat, last_updated }) => {
  return (
    <div className="searchbar_details">
      {lat && last_updated && (
        <>
          <p>
            latitude {lat} longitude {lon}
          </p>
          <p>accurate to {last_updated}</p>
        </>
      )}
    </div>
  );
};

export default MoreInfo;
