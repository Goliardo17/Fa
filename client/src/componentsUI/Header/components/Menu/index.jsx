import React from "react"
import "./Menu.css"

export const Menu = ({ page, setPage }) => (
  <ul className="menu">
    <li>Home</li>
    <li>Pages</li>
    <li onClick={() => setPage("Shop")}>Shop</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>
)