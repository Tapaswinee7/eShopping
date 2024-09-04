import React from "react";
// Importing React to use JSX and component functionality.

import "@fortawesome/fontawesome-free/css/all.min.css";
// Importing Font Awesome CSS for using icons in the header.

const Header = ({ cartCount }) => {
  // Defining the Header component, which accepts a single prop:
  // - cartCount: the number of items currently in the cart

  return (
    <div className="header">
      {/* Main container for the header */}
      <div className="title-container">
        {/* Container for the title */}
        <h2 className="title">Bangalore eShopping</h2>
        {/* Displaying the website title */}
      </div>
      <div className="cart-items">
        {/* Container for the cart icon and cart count */}
        <i
          className="fa-solid fa-cart-shopping"
          style={{ color: "white", padding: "8px" }}
        ></i>
        {/* Font Awesome shopping cart icon with custom styles for color and padding */}
        <div className="cart">
          {/* Container for the cart label and count */}
          Cart <span className="cart-count">{cartCount}</span>
          {/* Displaying the word "Cart" followed by the cart item count */}
        </div>
      </div>
    </div>
  );
};

export default Header;
// Exporting the Header component as the default export.
