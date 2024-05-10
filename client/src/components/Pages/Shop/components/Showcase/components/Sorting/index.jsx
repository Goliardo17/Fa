import React from "react"

export const Sorting = ({ amount, changeFilterForm }) => (
    <div className="sorting">
      <p>There are {amount} products in this category</p>
      <select 
        onChange={(e) => changeFilterForm("sorting", e.target.value)}
      >
        <option value="id">By relevance</option>
        <option value="name">Name (A to Z)</option>
        <option value="price">Price (Low to High)</option>
      </select>
    </div>
  )