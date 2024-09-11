// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null);

  const addRecipe = (recipe, id = null) => {
    if (id) {
      setRecipes(recipes.map(r => (r.id === id ? recipe : r)));
    } else {
      setRecipes([...recipes, recipe]);
    }
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleEdit = (recipe) => {
    setEditRecipe(recipe);
  };

  const handleCancelEdit = () => {
    setEditRecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      <RecipeForm
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        setEditing={handleCancelEdit}
      />
      <RecipeList
        recipes={recipes}
        onEdit={handleEdit}
        onDelete={deleteRecipe}
      />
    </div>
  );
}

export default App;
