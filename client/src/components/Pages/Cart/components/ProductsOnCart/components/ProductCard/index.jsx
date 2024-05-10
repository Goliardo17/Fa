import React, { useState } from "react";

export const ProductCard = ({ product, quantity, changeCart }) => {
  // const [] = useState()

  const creatBodyRequest = (product, action, quantity) => {
    changeCart({
      product: product,
      action: action,
      quantity: quantity
    })
  }

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
        
            <p>${
                  // sum()
                }
            </p>
        </div>
      </div>
    </div>
      <button onClick={() => creatBodyRequest(product, "clear")}>X</button>
    </div>
)}