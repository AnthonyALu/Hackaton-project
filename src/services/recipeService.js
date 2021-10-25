const recipes = [];

export function getRecipes() {
  return recipes;
}

export function getRecipe(id) {
  if (recipes.find((r) => r.idMeal === id)) {
    return true;
  } else {
    return false;
  }
}

export function saveRecipe(recipe) {
  // let str = recipe.idMeal;
  let selectedRecipe = recipes.find((r) => r.idMeal === recipe.idMeal) || {};
  if (!selectedRecipe.idMeal) {
    recipes.push(recipe);
    console.log(recipes);
    return selectedRecipe;
  } else {
    deleteRecipe(selectedRecipe.idMeal);
  }
}

export function deleteRecipe(id) {
  let selectedRecipe = recipes.find((r) => r.idMeal === id);
  recipes.splice(recipes.indexOf(selectedRecipe), 1);
  return selectedRecipe;
}
