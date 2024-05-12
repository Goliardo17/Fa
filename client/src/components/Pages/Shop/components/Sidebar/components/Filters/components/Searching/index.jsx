import React from "react"
import { debounce } from "../../../../../../../../../helpers/debounce"

export const Searching = ({ changeFilterForm }) => {
  const filtered = (value) => {
    changeFilterForm("input", value)
  }
  
  const filtersDebounced = debounce(filtered, 500)
  
  return (
    <input 
        className="sidebar-searching"
        onChange={(e) => filtersDebounced(e.target.value)} 
        placeholder="Search" 
    />
  )
}