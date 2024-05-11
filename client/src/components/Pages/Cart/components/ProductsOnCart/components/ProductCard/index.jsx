import React, { useState } from "react";

export const ProductCard = ({ product, quantity, priceAmount, creatBodyRequest }) => {
  return (
    <div>
      <div>
      <img src={product.image} width="100px" />
      
      <div>
        <h4>{product.name}</h4>
        
        <div>
            {product.oldPrice ? <p>${product.oldPrice}</p> : null}
            <p>${product.price}</p>
          
            <div>
              <button onClick={() => creatBodyRequest(product, "subtract", 1)}> - </button>
              <input type="number" value={quantity} onChange={(e) => creatBodyRequest(product, "change", e.target.value)} />
              <button onClick={() => creatBodyRequest(product, "add", 1)}> + </button>
            </div>
        
            <p>
              {
                priceAmount ? `$${priceAmount}` : 0
              }
            </p>
        </div>
      </div>
    </div>
      <button onClick={() => creatBodyRequest(product, "clear")}>X</button>
    </div>
)}