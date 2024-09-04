import React, { useState } from "react";
// Importing React and the useState hook for managing state in the component.

import "./cart/cart.css";
// Importing the CSS file for styling. The styles will be applied to the elements in this component.

import Accordion from "./cart/Accordion";
// Importing the Accordion component, which will handle the category and subcategory selection.

import ProductTile from "./cart/ProductTile";
// Importing the ProductTile component, which will be used to display individual products.

import Header from "./cart/Header";
// Importing the Header component, which will display the cart count and other potential header elements.

import { categories } from "./cart/constants";
// Importing the categories data from a constants file. This is a list of categories, each containing subcategories and products.

const App = () => {
  // Defining the main App component.

  const [selectedCategory, setSelectedCategory] = useState(null);
  // State to keep track of the selected category. Initially, no category is selected (null).

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  // State to keep track of the selected subcategory. Initially, no subcategory is selected (null).

  const [cartCount, setCartCount] = useState(0);
  // State to keep track of the number of items in the cart. Initially, the cart is empty (0).

  const handleCategorySelect = (categoryName) => {
    // Function to handle when a category is selected.
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
    // If the selected category is the same as the current one, deselect it (set to null). Otherwise, set it as the selected category.
    setSelectedSubcategory(null);
    // Reset the selected subcategory whenever a new category is selected.
  };

  const handleSubcategorySelect = (subcategoryName) => {
    // Function to handle when a subcategory is selected.
    setSelectedSubcategory(
      subcategoryName === selectedSubcategory ? null : subcategoryName
    );
    // If the selected subcategory is the same as the current one, deselect it (set to null). Otherwise, set it as the selected subcategory.
  };

  const handleAddToCart = () => {
    // Function to handle adding items to the cart.
    setCartCount(cartCount + 1);
    // Increment the cart count by 1 each time an item is added.
  };

  // Find the products based on the selected subcategory
  const productsToShow =
    selectedCategory &&
    categories
      .find((cat) => cat.name === selectedCategory)
      // Find the category object that matches the selectedCategory state.
      .subcategories.find((sub) => sub.name === selectedSubcategory)?.items;
  // Within the selected category, find the subcategory that matches the selectedSubcategory state.
  // If found, return its items; otherwise, return undefined (no products to show).

  return (
    <div className="app">
      {/* Main container for the application */}
      <Header cartCount={cartCount} />
      {/* Render the Header component, passing the current cartCount as a prop */}
      <div className="content">
        {/* Container for the main content of the app */}
        <Accordion
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
        />
        {/* Render the Accordion component, passing the necessary state and handler functions as props */}
        <div className="products">
          {/* Container for displaying products */}
          {!selectedCategory && (
            <div className="category-header">
              <h2>Please select a category</h2>
            </div>
          )}
          {/* If no category is selected, prompt the user to select a category */}
          {selectedCategory && (
            <div className="category-header">
              <h2>{selectedSubcategory || selectedCategory}</h2>
            </div>
          )}
          {/* If a category is selected, display the name of the selected subcategory or the category itself */}
          {productsToShow &&
            productsToShow.map((product) => (
              <ProductTile
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          {/* If there are products to show (based on the selected subcategory), render a ProductTile for each product */}
        </div>
      </div>
    </div>
  );
};

export default App;
// Exporting the App component as the default export of this module.
