import React, { useState, useEffect } from "react";

export const Products = ({ products }) => {
  return (
    <div className="products">
      {
      products.length > 0 ? products.map((product) => (
        <div key={product.id}>
          {product.isSale ? <p>sale</p> : null}
          {product.isNew ? <p>new</p> : null}
          <img 
            src={product.image}
            width={262} 
          />
          <p>{product.name}</p>

          <div>
            <p>${product.price}</p>
            {product.oldPrice ? (
              <p>${product.oldPrice}</p>
            ) : null}
          </div>
        </div>
      )) : <div>Sorry, there are no products for this request</div>
      }
    </div>
  );
};