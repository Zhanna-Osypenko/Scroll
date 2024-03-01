import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const tabsData = ["HOME", "SHOP", "LOOKBOOK", "FEATURES", "PAGES", "BLOCK"];
// const iconsData = ["🔍", "❤️", "🛒"];
const iconsData = [
  <AiOutlineSearch />,
  <AiOutlineHeart />,
  <AiOutlineShoppingCart />,
];

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="navbar__container">
        <div className="navbar__logo">YOUR LOGO</div>

        <ul className="navbar__tabs">
          {tabsData.map((tab, index) => (
            <li key={index}>
              <a href="#">{tab}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__icons">
          {iconsData.map((icon, index) => (
            <span key={index} className="icon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
    </nav>
    
  );
}

export default Nav;
