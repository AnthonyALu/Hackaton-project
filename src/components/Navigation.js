import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://www.svgrepo.com/show/287733/burger.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Food Recipes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link exact to="/" className="nav-link">
              Home
            </Link>
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
            <Link to="/searchname" className="nav-link">
              Search By Name
            </Link>
            <Link to="/searchrandom" className="nav-link">
              Search Random Food
            </Link>
            <Link to="/searchletters" className="nav-link">
              Search By Letters
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
