import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Recipes from "./components/recipes";
import RecipeForm from "./components/recipeForm";
import HomePage from "./components/HomePage";
import SerachByName from "./components/SearchByName";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import FoodByLetter from "./components/FoodByLetter";
import SearchRandom from "./components/SearchRandom";

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
        <Route path="/searchrandom">
          <SearchRandom />
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
