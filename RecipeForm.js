import React, { useState, useEffect } from 'react';

const RecipeForm = ({ addRecipe, editRecipe, setEditing }) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' });

  useEffect(() => {
    if (editRecipe) {
      setRecipe(editRecipe);
    }
  }, [editRecipe]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editRecipe) {
      addRecipe(recipe, recipe.id);
      setEditing(null);
    } else {
      addRecipe({ ...recipe, id: Date.now() });
    }
    setRecipe({ title: '', ingredients: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={recipe.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        name="ingredients"
        placeholder="Ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />
      <label htmlFor="instructions">Instructions</label>
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={recipe.instructions}
        onChange={handleChange}
        required
      />
      <button type="submit">{editRecipe ? 'Update' : 'Add'} Recipe</button>
    </form>
  );
};

export default RecipeForm;
