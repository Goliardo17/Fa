import React from "react";
import { Line } from "./components/Line/index.jsx"

export const Order = ({ order }) => (
    <div>
      <h3>You order</h3>
      <Line
        name={"line"}
        text="Order price"
        value={order.orderPrice !== 0 ? `$${order.orderPrice}` : "-"}
      />
      <Line
        name={"line"}
        text="Discount for promo code"
        value={order.promocode ? "Yes" : "No"}
      />
      <Line 
        name={"line"} 
        text="Delivery" 
        value={order.deliveryPrice !== 0 ? `$${order.deliveryPrice}` : "-"} 
      />
      <Line
        name={"line total"}
        text="Total"
        value={order.totalPriceOrder !== 0 ? `$${order.totalPriceOrder}` : "-"}
      />
    </div>
)