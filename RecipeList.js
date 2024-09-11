import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, onEdit, onDelete }) => {
  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onEdit={() => onEdit(recipe)}
            onDelete={() => onDelete(recipe.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
