import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FoodByLetter = () => {
  // store food in foods state when it's fetched
  const [foods, setFoods] = useState([]);
  // loading will be used to show loading text while the gets fetched
  const [loading, setLoading] = useState(true);
  // with clickig the letters, letter state will be add as a eendpoint to the API url
  const [letter, setLetter] = useState('');
  // Create an array of a;phabets
  const alphabet = [...Array(26).keys()].map((i) =>
    String.fromCharCode(i + 97)
  );
  // fetching all the food usinf async await
  const fetchFood = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    let data = await response.json();
    setFoods(data.meals);
  };
  // useEffect will load the fetchFood function and it has a dependency which is letter state, every time the letter value gets changed, useEffect will reload the fetch food fucntion
  useEffect(() => {
    fetchFood();
  }, [letter]);

  // this function will store the letter to the set letter state, it has passed ot the button letters
  const handleLetter = (letter) => {
    setLetter(letter);
  };

  return (
    <>
      <Container>
        <h1
          style={{ margin: '2rem auto', fontSize: '2rem', textAlign: 'center' }}
        >
          You can Find Food By First Letter
        </h1>
      </Container>
      <Container>
        <Row>
          {/* maping therough array of alphabet and showing each letter as a button */}
          {alphabet.map((l, idx) => {
            return (
              <Col key={idx} style={{ margin: '10px' }}>
                <Button
                  pill
                  variant='outline-dark'
                  onClick={() => handleLetter(l)}
                >
                  {l}
                </Button>
              </Col>
            );
          })}
        </Row>
        <Row>
          {/* mapping through foods state and showing each food as a single card with image */}
          {foods.map((food, idx) => {
            const { idMeal, strCategory, strMeal, strMealThumb, strArea } =
              food;
            return (
              <Col xs={6} md={4} key={idMeal}>
                <Card style={{ width: '18rem', margin: '15px' }}>
                  <Card.Img variant='top' src={strMealThumb} />
                  <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>Category: {strCategory}</Card.Text>
                    <Card.Text>{strArea} Cuisine</Card.Text>

                    <Button variant='primary'>View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default FoodByLetter;
