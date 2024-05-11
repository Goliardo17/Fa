import Rreact, { useState, useEffect } from "react"
import { ProductsOnCart } from "./components/ProductsOnCart/index.jsx"
import { Order } from "./components/Order/index.jsx"
import { ChangePromocode } from "./components/ChangePromocode/index.jsx"

export const Cart = () => {
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState("")
    const [inputPromocode, setInputPromocode] = useState("")

    console.log("products", products)
    console.log("order", order)

    const changeCart = (body) => {
        fetch("http://localhost:8000/cart/change", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.productsInCart)
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

    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.productsInCart)
                setOrder(data.orderInfo)
            })
            .catch((err) => console.log(err))
    }, [])
    
    return (
        <div>
            <div>
                <ProductsOnCart products={products} creatBodyRequest={creatBodyRequest}/>
                <Order order={order} />
            </div>
            <ChangePromocode changeOrder={changeOrder} setInputPromocode={setInputPromocode} />
        </div>
    )
}