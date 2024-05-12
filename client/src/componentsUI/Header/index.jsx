import React from "react"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { Icons } from "./components/Icons"
import "./Header.css"

export const Header = ({ page, setPage, favoriteInfo, productsInCart }) => {
  return (
    <div className="header">
      <div className="left-menu">
        <Logo />
        <Menu page={page} setPage={setPage} />
      </div>
      <Icons setPage={setPage} favoriteInfo={favoriteInfo} productsInCart={productsInCart}/>
    </div>
  )
}