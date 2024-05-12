import React from "react"

export const Line = ({ name, text, value }) => {
  return (
    <div className={name}>
      <p>{text}</p>
      <p>{value}</p>
    </div>
  );
};