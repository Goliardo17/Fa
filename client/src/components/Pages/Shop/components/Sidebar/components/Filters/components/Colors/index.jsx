import React from "react"

export const Colors = ({ filters, changeFilterForm, filterForm }) => (
    <div className="sidebar-color">
        <h4>Colors</h4>
        <div className="list">
        {
        filters.map((color) => 
        <label key={"color-" + color}>
          {filterForm.colors.filter((i) => i === color).length ? <img src="checkbox-checked.svg" /> : <img src="checkbox-none.svg" />}
          <input 
            name="colors" 
            value={color} 
            type="checkbox" 
            onChange={(e) => changeFilterForm("colors", e.target.value)} 
          />
          <span>{color}</span>
        </label>)
        }
        </div>
    </div>
)