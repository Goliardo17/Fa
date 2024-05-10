import React from "react"
import "./Header.css"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { Icons } from "./components/Icons"


export const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <Menu />
      <Icons />
    </div>
  )
}