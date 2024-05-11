import React from "react";
import { Sorting } from "./components/Sorting"
import { Products } from "./components/Products"
import { Pagination } from "./components/Pagination"

export const Showcase = ({ productsInfo, changeFilterForm, changeFavorite, favoriteInfo }) => {
    return (
        <div className="showcase">
            <Sorting amount={productsInfo.length} changeFilterForm={changeFilterForm} />
            {productsInfo.products ? <Products products={productsInfo.products} changeFavorite={changeFavorite} favoriteInfo={favoriteInfo}/> : <p>Loading...</p>}
            <Pagination page={productsInfo.page} pages={productsInfo.pages} changeFilterForm={changeFilterForm} />
        </div>
    )
}
