import Rreact, { useState, useEffect } from "react"
import { ProductsOnCart } from "./components/ProductsOnCart/index.jsx"
import { Order } from "./components/Order/index.jsx"
import { ChangePromocode } from "./components/ChangePromocode/index.jsx"
import "./Cart.css"

export const Cart = ({ order, setOrder, productsInCart, creatBodyRequest }) => {
    const [inputPromocode, setInputPromocode] = useState("")

    const changeOrder = (promocode) => {
        fetch("http://localhost:8000/cart/promocode", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({promocode: promocode})
        })
            .then((res) => res.json())
            .then((data) => setOrder(data.orderInfo))
            .catch((err) => console.log(err))
    }
    
    return (
        <div className="cart">
            <div className="order">
                {productsInCart.length ? <ProductsOnCart products={productsInCart} creatBodyRequest={creatBodyRequest}/> : <p>You don't have any items in your cart yet</p>}
                <Order order={order} />
            </div>
            <ChangePromocode changeOrder={changeOrder} setInputPromocode={setInputPromocode} />
        </div>
    )
}