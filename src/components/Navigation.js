import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=''
              src='https://www.svgrepo.com/show/287733/burger.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Food Recipes
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/searchname'>Search By Name</Nav.Link>
            <Nav.Link href='/searchingredients'>Search By Ingredients</Nav.Link>
            <Nav.Link href='/searchletters'>Search By Letters</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
