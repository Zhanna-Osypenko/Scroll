import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Women() {
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
      .then((data) => setProducts(data.slice(-4))) // Получаем первые 4 товара из API
      .catch((error) => {
        console.error("Ошибка при загрузке данных из API", error);
      });
  }, []);

  return (
    <div className="women">
      <div className="container">
        <div className="women__container">
          <h2>WOMEN’S FASHION</h2>
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

export default Women;
