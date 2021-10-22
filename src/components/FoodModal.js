import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function FoodModal(props) {
  const [show, setShow] = useState(false);
  const { strCategory, strMeal, strInstructions } = props;
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  } = props;
  const {
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
  } = props;

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>{strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{strCategory}</h3>
        <h4>Instructions:</h4>
        {strInstructions && (
          <p>
            {show ? strInstructions : `${strInstructions.substring(0, 200)}...`}
            <button className='btn-modal' onClick={() => setShow(!show)}>
              {show ? 'Show Less' : 'Read More'}
            </button>
          </p>
        )}
      </Modal.Body>
      <Modal.Body>
        <h4>Ingredients: </h4>
        <ListGroup as='ol' numbered>
          <ListGroup.Item as='li'>
            {strIngredient1} : {strMeasure1}
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            {strIngredient2} : {strMeasure2}
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            {strIngredient3} : {strMeasure3}
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            {strIngredient4} : {strMeasure4}
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            {strIngredient5} : {strMeasure5}
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            {strIngredient6} : {strMeasure6}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FoodModal;
