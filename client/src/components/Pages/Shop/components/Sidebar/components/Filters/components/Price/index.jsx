import React, { useState } from "react";
import { debounce } from "../../../../../../../../../helpers/debounce"

// import "./Range.scss";

export const Price = ({ filters, changeFilterForm }) => {
  const min = Number(filters.minPrice);
  const max = Number(filters.maxPrice);

  const [maxValue, setMaxValue] = useState(Number(filters.maxPrice));
  const [minValue, setMinValue] = useState(Number(filters.minPrice));

  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  const debouncedChangeFilter = debounce(changeFilterForm, 600) // по какой то причине дебаунс работает не так как должен

  const changeMin = (key, value) => {
    const number = Number(value)

    if (number >= maxValue || number < filters.minPrice) {
      return
    }

    setMinValue(value)
    debouncedChangeFilter(key, value)
  }

  const changeMax = (key, value) => {
    const number = Number(value)

    if (number <= minValue) {
      return
    }

    setMaxValue(value)
    debouncedChangeFilter(key, value)
  }

  return (
    <div className="wrapper">
      <h4>Price</h4>
      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => changeMin("priceMin", e.target.value)}
        />
        <input
          className="input"
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => changeMax("priceMax", e.target.value)}
        />
      </div>
      <div className="slider">
        <div className="control" style={{ left: `${minPosition}%` }} />
        <div className="rail">
          <div
            className="inner-rail"
            style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }}
          />
        </div>
        <div className="control" style={{ left: `${maxPosition}%` }} />
      </div>
    </div>
  );
};