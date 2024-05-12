import React from "react";

export const Products = ({ products, changeFavorite, favoriteInfo, creatBodyRequest }) => (
    <div className="products">
      {
      products.length > 0 ? products.map((product) => (
        <div key={product.id} className="product-card">
          {product.isSale ? <p className="sale">sale</p> : null}
          {product.isNew ? <p className="new">new</p> : null}
          <img className="favorite" src={favoriteInfo.filter((favProduct) => favProduct.id === product.id).length ? "added-favorite.svg" : "none-favorite.svg"}
            onClick={() => changeFavorite(product)}
          />
          <img 
            className="product-imeg"
            src={product.image} 
          />
          <p className="product-name">{product.name}</p>

          <div className="product-price-cantainer">
            <p className="product-price">${product.price}</p>
            {
              product.oldPrice ? <p className="product-old-price">${product.oldPrice}</p> : null
            }
          </div>
          <div className="add-product">
            <button onClick={() => creatBodyRequest(product, "add", 1)}>Add to cart</button>
          </div>
        </div>
      )) : <div>Sorry, there are no products for this request</div>
      }
    </div>
  );