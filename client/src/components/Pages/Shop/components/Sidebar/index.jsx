import React from "react";
import { Filters } from "./components/Filters/index.jsx"
import "./Sidebar.css"

export const Sidebar = ({ changeFilterForm, filterForm }) => (
    <div className="sidebar">
        <Filters changeFilterForm={changeFilterForm} filterForm={filterForm} />
        {/* <Reviewed /> */}
    </div>
)