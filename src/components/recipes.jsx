import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FoodModal from "./FoodModal";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import { getRecipes, deleteRecipe } from "../services/recipeService";

class Recipes extends React.Component {
  state = {
    recipes: [],
    modalShow: false,
    recipe: {},
    searchQuery: "",
  };

  componentDidMount() {
    this.setState({ recipes: getRecipes() });
  }

  handleDelete = (recipe) => {
    deleteRecipe(recipe.idMeal);
    this.setState({ recipes: getRecipes() });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  getSearchData = () => {
    const { searchQuery, recipes: allRecipes } = this.state;

    let filteredRecipes = allRecipes;
    if (searchQuery) {
      filteredRecipes = allRecipes.filter((r) =>
        r.strMeal.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filteredRecipes);

    return { totalCount: filteredRecipes.length, data: sorted };
  };

  setModalShow = (bool) => {
    this.setState({ modalShow: bool });
  };

  setRecipe = (recipe) => {
    this.setState({ recipe: recipe });
  };

  handleModal = (id) => {
    this.setModalShow(true);
    this.state.recipes.map((food) => {
      if (food.idMeal === id) {
        this.setRecipe(food);
      }
    });
  };

  render() {
    const { modalShow, recipe, searchQuery } = this.state;
    const { length: count } = this.state.recipes;
    if (count === 0)
      return (
        <h1 className="m-4 text-center">
          You currently do not have any favourite recipes.
        </h1>
      );
    const { data: filteredRecipes } = this.getSearchData();

    return (
      <>
        <Container>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
        </Container>
        <FoodModal
          show={modalShow}
          onHide={() => this.setModalShow(false)}
          {...recipe}
        />
        <Container>
          <Row>
            {filteredRecipes.map((food) => {
              const { idMeal, strCategory, strMeal, strMealThumb, strArea } =
                food;
              return (
                <Col xs={6} md={4} key={idMeal}>
                  <Card style={{ width: "18rem", margin: "15px" }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                      <Card.Title>{strMeal}</Card.Title>
                      <Card.Text>Category: {strCategory}</Card.Text>
                      <Card.Text>{strArea} Cuisine</Card.Text>

                      <Button
                        variant="dark"
                        onClick={() => this.handleModal(idMeal)}
                      >
                        View Recipe
                      </Button>
                      <Button
                        className="m-2"
                        variant="danger"
                        onClick={() => this.handleDelete(food)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Recipes;
