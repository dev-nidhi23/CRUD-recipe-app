import React from 'react';

const RecipeItem = ({ recipe, onEdit, onDelete }) => {
  return (
    <li>
      <h3>{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default RecipeItem;
