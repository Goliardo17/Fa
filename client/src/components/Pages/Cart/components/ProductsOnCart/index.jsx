import React, { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard"

export const ProductsOnCart = () => {
    const [products, setProducts] = useState([])

    const changeCart = (body) => {
        fetch("http://localhost:8000/cart/change", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data) => console.log(data.productsInCart))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => setProducts(data.productsInCart))
    }, [])

    return (
        <>
            {
                products.map((productInCart) => (
                    <ProductCard product={productInCart.product} quantity={productInCart.quantity} changeCart={changeCart} />
                ))
            }
        </>
    )
}