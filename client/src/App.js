import React, { useState } from "react";

import { Header } from "./componentsUI/Header";
import { Shop } from "./components/Pages/Shop"
import { Cart } from "./components/Pages/Cart"
import "./App.css";

export const App = () => {
  const [page, setPage] = useState("Shop")
  return (
    <div>
      <Header setPage={setPage} />
      {
        page === "Shop" ? <Shop /> : <Cart />
      }
    </div>
  );
};