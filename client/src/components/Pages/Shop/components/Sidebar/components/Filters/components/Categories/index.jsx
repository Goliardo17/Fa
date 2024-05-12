import React from "react"

export const Categories = ({ filters, changeFilterForm, filterForm }) => {
  return (
    <div className="sidebar-category">
      <h4>Categories</h4>
      <div className="list">
      {
        filters.map((item) => 
            <label key={"category-" + item}>
                {
                  item !== filterForm.category ? <img src="bg.svg" /> : <img src="line.svg" />
                }
                <input 
                  className="category"
                  name="categories" 
                  value={item} 
                  type="radio" 
                  onChange={(e) => changeFilterForm("category", e.target.value)} 
                />
                <span>{item}</span>
            </label> 
        )
      }
      </div>
    </div>
  )
}