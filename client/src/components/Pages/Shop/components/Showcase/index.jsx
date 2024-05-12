import React from "react";
import { Sorting } from "./components/Sorting"
import { Products } from "./components/Products"
import { Pagination } from "./components/Pagination"
import "./Showcase.css"

export const Showcase = ({ productsInfo, changeFilterForm, changeFavorite, favoriteInfo, creatBodyRequest }) => {
    return (
        <div className="showcase">
            <Sorting amount={productsInfo.length} changeFilterForm={changeFilterForm} />
            {productsInfo.products ? <Products products={productsInfo.products} changeFavorite={changeFavorite} favoriteInfo={favoriteInfo} creatBodyRequest={creatBodyRequest}/> : <p>Loading...</p>}
            <Pagination page={productsInfo.page} pages={productsInfo.pages} changeFilterForm={changeFilterForm} />
        </div>
    )
}
