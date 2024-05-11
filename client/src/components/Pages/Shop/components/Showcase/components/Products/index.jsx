import React from "react";

export const Products = ({ products, changeFavorite, favoriteInfo }) => {

  const addProductInCart = (product) => {
    fetch("http://localhost:8000/cart/change", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        product: product,
        action: "add",
        quantity: 1
      })
    })
  }

  return (
    <div className="products">
      {
      products.length > 0 ? products.map((product) => (
        <div key={product.id}>
          {product.isSale ? <p>sale</p> : null}
          {product.isNew ? <p>new</p> : null}
          <img src={favoriteInfo.filter((favProduct) => favProduct.id === product.id).length ? "added-favorite.svg" : "none-favorite.svg"}
            onClick={() => changeFavorite(product)}
          />
          <img 
            src={product.image}
            width={262} 
          />
          <p>{product.name}</p>

          <div>
            <p>${product.price}</p>
            {
              product.oldPrice ? <p>${product.oldPrice}</p> : null
            }
          </div>
          <div className="visible">
          <button onClick={() => addProductInCart(product)}>Add to cart</button>
          </div>
        </div>
      )) : <div>Sorry, there are no products for this request</div>
      }
    </div>
  );
};