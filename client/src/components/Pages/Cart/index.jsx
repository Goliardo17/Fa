import Rreact from "react"
import { ProductsOnCart } from "./components/ProductsOnCart/index.jsx"
import { Order } from "./components/Order/index.jsx"
import { ChangePromocode } from "./components/ChangePromocode/index.jsx"

export const Cart = () => (
    <div>
        <div>
            <ProductsOnCart />
            <Order />
        </div>
        <ChangePromocode />
    </div>
)