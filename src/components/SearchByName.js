import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ListGroup, Form } from "react-bootstrap";
import Like from "./common/like";

const SearchByName = () => {
  // set state to store single food with request
  const [singleFood, setSingleFood] = useState([]);
  const [showSearchedFood, setShowSearchedFood] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const fetchRandomFood = async () => {
    try {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${singleFood}`
      );
      let data = await response.json();
      setSingleFood(data.meals[0]);
    } catch (err) {
      setError(
        `Something went wrong, please try again later or enter something different.`
      );
    }
  };

  useEffect(() => {
    fetchRandomFood();
  }, [showSearchedFood]);

  console.log(singleFood);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const { strMeal, strCategory, strMealThumb, strArea, strInstructions } =
    singleFood;
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  } = singleFood;
  const {
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
  } = singleFood;

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
      <Form onSubmit={(e) => submitForm(e)}>
        <Form.Group className="mb-3">
          <Form.Label>What you are looking for...</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search food by name here!"
            className="mb-2"
            onChange={(e) => setSingleFood(e.target.value)}
            singleFood={singleFood}
          />
          <Form.Text className="text-muted">
            Hopefully you find your food....
          </Form.Text>
        </Form.Group>
        <Button
          variant="dark"
          size="sm"
          active
          onClick={() => setShowSearchedFood(singleFood)}
        >
          Search by Name
        </Button>
      </Form>

      <Row className="mt-5">
        {singleFood ? (
          <Col sm={8}>
            <div className="d-flex flex-row">
              <h3>{strMeal}</h3>
              <Like food={singleFood} />
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
        {showSearchedFood && (
          <Col sm={4} className="random-img-container">
            <img src={strMealThumb} alt="" className="random-img" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SearchByName;
