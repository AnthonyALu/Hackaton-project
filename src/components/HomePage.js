import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
const HomePage = () => {
  return (
    <>
      <CardGroup className="m-4">
        <Card className="m-4 border-0">
          <Card.Img
            variant="top"
            src="https://www.svgrepo.com/show/139515/burger.svg"
          />
          <Card.Body>
            <Card.Title>Browse Recipes</Card.Title>
            <Card.Text>Browse any recipes that are in our database.</Card.Text>
            <Button variant="dark">
              <Link to="/searchname" style={linkStyle}>
                Browse Recipes
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className="m-4 border-0">
          <Card.Img
            variant="top"
            src="https://www.svgrepo.com/show/208225/recipe.svg"
          />
          <Card.Body>
            <Card.Title>View Your Recipes</Card.Title>
            <Card.Text>
              View your favourites recipes and create your own.
            </Card.Text>
            <Button variant="dark">
              <Link to="/recipes" style={linkStyle}>
                View Recipes
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className="m-4 border-0">
          <Card.Img
            variant="top"
            src="https://www.svgrepo.com/show/207956/cupboard-drawer.svg"
          />
          <Card.Body>
            <Card.Title>Pantry</Card.Title>
            <Card.Text>
              Organise your ingredients to see what you can make.
            </Card.Text>
            <Button variant="dark">
              <Link to="/pantry" style={linkStyle}>
                View Pantry
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default HomePage;
