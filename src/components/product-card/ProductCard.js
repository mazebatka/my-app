import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="products">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};
