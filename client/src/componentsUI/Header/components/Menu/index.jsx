import React from "react"
import "./Menu.css"

const LINKS = ["Home","Pages","Shop","Blog","Contact"]

export const Menu = () => 
  <ul class="menu">
    {LINKS.map(item => <li>{item}</li>)}
  </ul>