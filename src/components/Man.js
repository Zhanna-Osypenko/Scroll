import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Man() {
  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при выполнении запроса");
        }
        return response.json();
      })
      .then((data) => setProducts(data.slice(0,4))) // Получаем последние 4 товара из API
      .catch((error) => {
        console.error("Ошибка при загрузке данных из API", error);
      });
  }, []);

  return (
    <div className="man">
      <div className="container">
        <div className="man__container">
          <h2>MEN’S FASHION</h2>
          <p>Shop our new arrivals from established brands</p>
          <div className="product-cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Man;
