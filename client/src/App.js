import React, { useState } from "react";

import { Header } from "./componentsUI/Header";
import { Shop } from "./components/Pages/Shop"
import "./App.css";

export const App = () => {  
  return (
    <div>
      <Header />
      <Shop />
    </div>
  );
};