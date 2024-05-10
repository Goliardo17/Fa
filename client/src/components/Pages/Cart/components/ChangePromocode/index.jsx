import React from "react";

export const ChangePromocode = () => (
    <div>
      <h4>You have a promo code?</h4>
      <p>
        To receive up-to-date promotional codes, subscribe to us on social
        networks.
      </p>
      <div>
        <input 
            placeholder="Enter promo code" 
            // onChange={(e) => setInputValue(e.target.value)} 
        />
        <button 
            // onClick={() => compare(inputValue)} 
            // disabled={!inputValue}
        >send</button>
      </div>
      <div>
        <p>Find us here:</p>
        <p>FB - TW - INS - PT</p>
      </div>
    </div>
)