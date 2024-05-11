import React, { useState } from "react";

export const ChangePromocode = ({ changeOrder }) => {
  const [inputPromocode, setInputPromocode] = useState("")

  return (
    <div>
      <h4>You have a promo code?</h4>
      <p>
        To receive up-to-date promotional codes, subscribe to us on social
        networks.
      </p>
      <div>
        <input 
            placeholder="Enter promo code" 
            onChange={(e) => setInputPromocode(e.target.value)} 
        />
        <button 
            onClick={() => changeOrder(inputPromocode)} 
            disabled={!inputPromocode}
        >send</button>
      </div>
      <div>
        <p>Find us here:</p>
        <p>FB - TW - INS - PT</p>
      </div>
    </div>
)}