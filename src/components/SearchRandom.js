import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import Like from "./common/like";
import { getRecipes } from "../services/recipeService";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const SearchRandom = () => {
  // set state to store random food with request

  const [randomFood, setRandomFood] = useState([]);
  const [showRandomFood, setShowRandomFood] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const fetchRandomFood = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setRandomFood(data.meals[0]);
    } catch (err) {
      setError(
        `Something went wrong, please visit other pages and come back later. ${err.message}`
      );
    }
  };

  useEffect(() => {
    fetchRandomFood();
  }, [showRandomFood]);

  var rFood = showRandomFood;
  const { strMeal, strCategory, strMealThumb, strArea, strInstructions } =
    showRandomFood;
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  } = showRandomFood;
  const {
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
  } = showRandomFood;
  if (error) {
    return (
      <>
        <Container className="mt-5">
          <h1>{error}</h1>
        </Container>
      </>
    );
  }
  return (
    <Container className="mt-5">
      <Button
        variant="dark"
        size="lg"
        active
        onClick={() => setShowRandomFood(randomFood)}
      >
        Get Random Recipe
      </Button>

      <Row className="mt-5">
        {showRandomFood ? (
          <Col sm={8}>
            <div className="d-flex flex-row">
              <h3>{strMeal}</h3>
              <Like food={rFood} />
            </div>
            <h4>{strArea} Cuisine </h4>
            <h4>{strCategory}</h4>
            {strInstructions && (
              <p>
                {show
                  ? strInstructions
                  : `${strInstructions.substring(0, 200)}...`}
                <button className="btn-modal" onClick={() => setShow(!show)}>
                  {show ? "Show Less" : "Read More"}
                </button>
              </p>
            )}
            <ListGroup variant="flush">
              <ListGroup.Item>
                {strIngredient1} {strMeasure1}
              </ListGroup.Item>
              <ListGroup.Item>
                {strIngredient2} {strMeasure2}
              </ListGroup.Item>
              <ListGroup.Item>
                {strIngredient3} {strMeasure3}
              </ListGroup.Item>
              <ListGroup.Item>
                {strIngredient4} {strMeasure4}
              </ListGroup.Item>
              <ListGroup.Item>
                {strIngredient5} {strMeasure5}
              </ListGroup.Item>
              <ListGroup.Item>
                {strIngredient6} {strMeasure6}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ) : null}
        {showRandomFood && (
          <Col sm={4} className="random-img-container">
            <img src={strMealThumb} alt="" className="random-img" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SearchRandom;
