import React from "react"
// import "./Pagination.css"

export const Pagination = ({ page, pages, changeFilterForm }) => (
    <div>
        <button 
        onClick={() => changeFilterForm("pageNumber", page - 1)}
        >-</button>
        { pages ?
        pages.map((item, index) => (
        <p 
            key={`page-${index}`} 
            onClick={() => changeFilterForm("pageNumber", item - 1)}
        >{item}</p>)) : null
        }
        <button 
        onClick={() => changeFilterForm("pageNumber", page + 1)}
        >+</button>
    </div>
)