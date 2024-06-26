import React, { useState, useEffect } from "react"
import { Searching } from "./components/Searching/index"
import { Categories } from "./components/Categories/index"
import { Price } from "./components/Price/index"
import { Colors } from "./components/Colors/index"

export const Filters = ({ changeFilterForm, filterForm }) => {
    const [filters, setFilters] = useState()

    useEffect(() => {
        fetch("http://localhost:8000/filters")
            .then((res) => res.json())
            .then((data) => setFilters(data))
    }, [])

    return (
        <div className="sidebare-filters">
            { filters ? 
            <>
                <Searching changeFilterForm={changeFilterForm} />
                <Categories filters={filters.categories} changeFilterForm={changeFilterForm} filterForm={filterForm} />
                <h4>Price</h4>
                <Price filters={filters} changeFilterForm={changeFilterForm} />
                <Colors filters={filters.colors} changeFilterForm={changeFilterForm} filterForm={filterForm} />
            </>
            : null }
        </div>
    )
} 