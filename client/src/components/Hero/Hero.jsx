import React, { useState } from "react";
import classes from "./hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const [type, setType] = useState("beach");
  const [priceRange, setPriceRange] = useState("0");
  const [continent, setContinent] = useState("0");

  const handleSearch = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-1,00,000</option>
            <option value="1">1,00,000-2,00,000</option>
            <option value="2">2,00,000-3,00,000</option>
            <option value="3">3,00,000-4,00,000</option>
            <option value="4">4,00,000-5,00,000</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Asia</option>
            <option value="1">Europe</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
