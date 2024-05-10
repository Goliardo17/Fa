import React from "react";

const LINKS = ["Favorite", "Cart"]

export const Icons = () => 
    <ul class="menu">
      {LINKS.map(item => <li>{item}</li>)}
    </ul>