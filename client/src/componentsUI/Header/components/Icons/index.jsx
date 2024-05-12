import React from "react";

export const Icons = ({ setPage, favoriteInfo, productsInCart }) => (
  <div className="right-menu">
    <img src="search.svg"/>
    <img src="user.svg" />
    <div className="counter">
      <img src="none-favorite.svg"/>
      <p>
        {favoriteInfo.length}
      </p>
    </div>
    <div className="counter" onClick={() => setPage("Cart")}>
      <img src="shopping-bag.svg"/>
      <p >
        {productsInCart.length}
      </p>
    </div>
  </div>
)