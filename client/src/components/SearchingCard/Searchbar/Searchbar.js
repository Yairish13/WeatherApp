import React,{useState} from "react";
import "./Searchbar.css";

const Searchbar = ({setCity}) => {
    const [currentValue, setCurrentValue] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        if(!currentValue.length > 1){
          return ;
        }
        setCity(currentValue)
        setCurrentValue('')
    }
  return (
    <div className="searchbar_container">
      <form onSubmit={onSubmit}>
        <label htmlFor="header-search">City name</label>
        <div>
          {" "}
          <input
            className="weatherSearchbar"
            type="text"
            id="city-search"
            placeholder="Search City"
            value={currentValue}
            name="s"
            onChange={(e)=> setCurrentValue(e.currentTarget.value)}
          ></input>
          <button className="check_button" type="submit">Check</button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
