import React from "react"

export const Categories = ({ filters, changeFilterForm }) => {
  return (
    <div>
      <h4>Categories</h4>
      {
        filters.map((item) => 
            <div key={"category-" + item}>
                <input 
                    name="categories" 
                    value={item} 
                    type="radio" 
                    onChange={(e) => changeFilterForm("category", e.target.value)} 
                />
                <label>{item}</label>
            </div>
        )
      }
    </div>
  )
}