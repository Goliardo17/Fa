import React, { useState } from "react";
import "./ProductCard.css"

export const ProductCard = ({ product, quantity, priceAmount, creatBodyRequest }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <img src={product.image} width="100px" />
        
        <div>
          <h4>{product.name}</h4>
          
          <div className="price-and-quantity">
            <div className="product-price-container">
              <p className="product-price">${product.price}</p>
              {product.oldPrice ? <p className="product-old-price">${product.oldPrice}</p> : null}
            </div>
            
              <div className="quantity-container">
                <button onClick={() => creatBodyRequest(product, "subtract", 1)}> - </button>
                <input type="number" value={quantity} onChange={(e) => creatBodyRequest(product, "change", e.target.value)} />
                <button onClick={() => creatBodyRequest(product, "add", 1)}> + </button>
              </div>
          </div>
        </div>
        <p className="sum">
          {
            priceAmount ? `$${priceAmount}` : 0
          }
        </p>
      </div>
      <button className="delete" onClick={() => creatBodyRequest(product, "clear")}>X</button>
    </div>
)}