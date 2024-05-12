import React, { useState, useEffect } from "react";

import { Header } from "./componentsUI/Header";
import { Shop } from "./components/Pages/Shop"
import { Cart } from "./components/Pages/Cart"
import "./App.css";

export const App = () => {
  const [page, setPage] = useState("Shop")
  const [favoriteInfo, setFavoriteInfo] = useState([])
  const [order, setOrder] = useState("")
  const [productsInCart, setProductsInCart] = useState([])
  console.log(productsInCart)

  const changeCart = (body) => {
    fetch("http://localhost:8000/cart/change", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then((data) => {
            setProductsInCart(data.productsInCart)
            setOrder(data.orderInfo)
        })
        .catch((err) => console.log(err))
}

const creatBodyRequest = (product, action, quantity) => {
  changeCart({
    product: product,
    action: action,
    quantity: quantity
  })
}

  const changeFavorite = (product) => {
    fetch(`http://localhost:8000/products/favorite/change`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          addproduct: product
      })
    })
      .then((res) => res.json())
      .then((data) => setFavoriteInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch(`http://localhost:8000/products/favorite`)
      .then((res) => res.json())
      .then((data) => setFavoriteInfo(data.favoriteProduct))
      .catch((err) => console.log(err))

      fetch("http://localhost:8000/cart")
        .then((res) => res.json())
        .then((data) => {
            setProductsInCart(data.productsInCart)
            setOrder(data.orderInfo)
        })
        .catch((err) => console.log(err))
  }, [])

  return (
    <div className="fashion-store">
      <Header page={page} setPage={setPage} favoriteInfo={favoriteInfo} productsInCart={productsInCart}/>
      {
        page === "Shop" ? <Shop favoriteInfo={favoriteInfo} changeFavorite={changeFavorite} creatBodyRequest={creatBodyRequest}/> : <Cart order={order} setOrder={setOrder} productsInCart={productsInCart} changeCart={changeCart} creatBodyRequest={creatBodyRequest}/>
      }
    </div>
  );
};