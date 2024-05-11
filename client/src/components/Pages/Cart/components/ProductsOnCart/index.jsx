import React, { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard"

export const ProductsOnCart = ({ products, creatBodyRequest }) => (
    <div>
        {
            products.map((productInCart) => (
                <ProductCard product={productInCart.product} priceAmount={productInCart.amountProduct} quantity={productInCart.quantity} creatBodyRequest={creatBodyRequest} />
            ))
        }
    </div>
)