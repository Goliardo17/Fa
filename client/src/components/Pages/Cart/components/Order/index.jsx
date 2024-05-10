import React from "react";
import { Line } from "./components/Line/index.jsx"

export const Order = () => (
    <div>
      <h3>You order</h3>
      <Line
        name={"line"}
        text="Order price"
        // value={priceOrder !== 0 ? `$${priceOrder}` : "-"}
      />
      <Line
        name={"line"}
        text="Discount for promo code"
        // value={promoCode ? "Yes" : "No"}
      />
      <Line 
        name={"line"} 
        text="Delivery" 
        // value={orderPrice() !== 0 ? `$${DELIVERY_PRICE}` : "-"} 
      />
      <Line
        name={"line total"}
        text="Total"
        // value={priceTotal !== 0 ? `$${priceTotal}` : "-"}
      />
    </div>
)