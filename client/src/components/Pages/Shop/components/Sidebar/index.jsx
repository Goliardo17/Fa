import React from "react";
import { Filters } from "./components/Filters/index.jsx"

export const Sidebar = ({ changeFilterForm }) => (
    <div>
        <Filters changeFilterForm={changeFilterForm} />
        {/* <Reviewed /> */}
    </div>
)