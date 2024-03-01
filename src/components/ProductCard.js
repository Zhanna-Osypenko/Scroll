import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-box">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
