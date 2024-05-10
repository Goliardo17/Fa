import React from "react"
import "./Header.css"
// import { Logo } from "./components/Logo"
// import { Menu } from "./components/Menu"
// import { Icons } from "./components/Icons"


export const Header = ({ setPage }) => {
  return (
    <div className="header-container">
      {/* <Logo />
      <Menu />
      <Icons /> */}
      <p onClick={() => setPage("Shop")}>Shop</p>
      <p onClick={() => setPage("Cart")}>Cart</p>
    </div>
  )
}