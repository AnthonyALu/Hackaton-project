import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Recipes from "./components/recipes";
import SerachByName from "./components/SearchByName";
import SearchByIngredients from "./components/SerachByIngredients";
import Footer from "./components/Footer";
import FoodByLetter from "./components/FoodByLetter";
import RecipeForm from "./components/recipeForm";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes/:id" component={RecipeForm}></Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/searchname">
          <SerachByName />
        </Route>
        <Route path="/searchingredients">
          <SearchByIngredients />
        </Route>
        <Route path="/searchletters">
          <FoodByLetter />
        </Route>
        <Route path="/form"></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
