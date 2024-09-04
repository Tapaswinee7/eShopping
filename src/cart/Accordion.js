import React from "react";
// Importing React to use JSX and component functionality.

const Accordion = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
}) => {
  // Destructuring props passed to the Accordion component:
  // - categories: the list of categories to display
  // - selectedCategory: the currently selected category
  // - selectedSubcategory: the currently selected subcategory
  // - onCategorySelect: function to call when a category is selected
  // - onSubcategorySelect: function to call when a subcategory is selected

  return (
    <div className="accordion">
      {/* Main container for the accordion */}
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          {/* Looping through each category in the categories array */}
          <div className="accordion-item">
            {/* Container for each accordion item */}
            <button
              className={`accordion-category ${
                selectedCategory === category.name ? "expanded" : ""
              }`}
              // Applying a CSS class to indicate if the category is expanded (selected)
              onClick={() => onCategorySelect(category.name)}
              // When the category button is clicked, call onCategorySelect with the category's name
            >
              <span className="icon-box">
                {selectedCategory === category.name ? "-" : "+"}
              </span>
              {/* Displaying a "-" if the category is expanded, otherwise a "+" */}
              <span className="accordion-label">{category.name}</span>
              {/* Displaying the name of the category */}
            </button>
            {selectedCategory === category.name && (
              <div className="accordion-content">
                {/* Only show this content if the current category is selected */}
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.name}
                    className={`accordion-subcategory ${
                      selectedSubcategory === subcategory.name
                        ? "highlight"
                        : ""
                    }`}
                    // Applying a CSS class to highlight the selected subcategory
                    onClick={() => onSubcategorySelect(subcategory.name)}
                    // When a subcategory is clicked, call onSubcategorySelect with the subcategory's name
                  >
                    {subcategory.name}
                    {/* Displaying the name of the subcategory */}
                  </div>
                ))}
                {/* Looping through and displaying subcategories of the selected category */}
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
// Exporting the Accordion component as the default export.
