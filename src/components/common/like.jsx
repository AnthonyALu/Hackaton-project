import React from "react";
import {
  saveRecipe,
  getRecipe,
  getRecipes,
} from "../../services/recipeService";

class Like extends React.Component {
  state = { recipes: [] };
  componentDidMount() {
    this.setState({ recipes: getRecipes() });
  }

  handleFavourite = (food) => {
    saveRecipe(food);
    this.setState({ recipes: getRecipes() });
  };

  render() {
    let classes = "m-2 fa fa-heart";
    const { food } = this.props;
    if (!getRecipe(food.idMeal)) classes += "-o";
    return (
      <div>
        <i
          onClick={() => this.handleFavourite(food)}
          style={{ cursor: "pointer", height: 50, width: 50 }}
          className={classes}
          aria-hidden="true"
        ></i>
      </div>
    );
  }
}

export default Like;
