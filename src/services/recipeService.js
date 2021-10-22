const recipes = [];

export function getRecipes() {
  return recipes;
}

export function getRecipe(id) {
  return recipes.find((r) => r._id === id);
}

export function saveRecipe(recipe) {
  let selectedRecipe = recipes.find((r) => r._id === recipe._id) || {};
  selectedRecipe.name = recipe.title;
  selectedRecipe.ingredients = recipe.ingredients;
  selectedRecipe.instructions = recipe.instructions;

  if (!selectedRecipe._id) {
    selectedRecipe._id = Date.now().toString();
    recipes.push(selectedRecipe);
  }

  return selectedRecipe;
}

export function deleteRecipe(id) {
  let selectedRecipe = recipes.find((r) => r._id === id);
  recipes.splice(recipes.indexOf(selectedRecipe), 1);
  return selectedRecipe;
}
