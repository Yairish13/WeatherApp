import { useEffect, useState } from "react";
import { weatherFunction } from "../helpers";


const useBasketsHistory = () => {
    const [city, setCity] = useState("tel aviv");
    const [weatherObject, setWeatherObject] = useState({});
    const [relevantForecastObj, setRelevantForecastObj] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    useEffect(() => {
      weatherFunction(
        city,
        setWeatherObject,
        setRelevantForecastObj,
        setIsPopupOpen
      );
    }, [city]);
  
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen); 
    }


  return {
    isPopupOpen,
    setCity,
    weatherObject,
    relevantForecastObj,
    togglePopup
  };
};

export default useBasketsHistory;
