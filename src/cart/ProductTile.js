import React from "react";
// Importing React to use JSX and component functionality.

const ProductTile = ({ product, onAddToCart }) => {
  // Defining the ProductTile component, which accepts two props:
  // - product: an object representing a product with title and description.
  // - onAddToCart: a function to handle adding the product to the cart.

  return (
    <div className="product-tile">
      {/* Main container for the product tile */}
      <div className="product-details">
        {/* Container for displaying product details */}
        <h3>{product.title}</h3>
        {/* Displaying the product's title */}
        <p>{product.description}</p>
        {/* Displaying the product's description */}
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => onAddToCart(product)}
      >
        {/* Button to add the product to the cart.
            onClick triggers the onAddToCart function, passing the product object */}
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTile;
// Exporting the ProductTile component as the default export.
