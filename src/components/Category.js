import React from "react";

function Category() {
  const categoryImages = [
    "/foto/categ1.svg",
    "/foto/categ2.svg",
    "/foto/categ3.svg",
    "/foto/categ4.svg",
  ];

  return (
    <div className="category">
      <div className="container">
        <div className="category__container">
          {categoryImages.map((image, index) => (
            <div className="category-item" key={index}>
              <img className="category-img" src={image} alt={`Category ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="category-btn">CATAGORY NAME</button>
      </div>
    </div>
  );
}

export default Category;
