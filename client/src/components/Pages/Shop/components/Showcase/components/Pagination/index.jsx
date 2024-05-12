import React from "react"

export const Pagination = ({ page, pages, changeFilterForm }) => (
    <div className="pagination">
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