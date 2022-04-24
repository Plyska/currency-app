import React from "react";

const Header = ({ usd, eur }) => {
  return (
    <header>
      <h1>Currency Converter</h1>
      <h1>USD: {usd}</h1>
      <h1>EUR: {eur}</h1>
    </header>
  );
};

export default Header;
