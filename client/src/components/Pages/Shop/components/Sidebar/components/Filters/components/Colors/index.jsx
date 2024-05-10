import React from "react"

export const Colors = ({ filters, changeFilterForm }) => (
    <div>
        <h4>Colors</h4>
        {
        filters.map((color) => 
        <div key={"color-" + color}>
          <input 
            name="colors" 
            value={color} 
            type="checkbox" 
            onChange={(e) => changeFilterForm("colors", e.target.value)} 
          />
          <label>{color}</label>
        </div>)
      }
    </div>
)