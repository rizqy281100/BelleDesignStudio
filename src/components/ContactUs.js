import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactUs = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Join the Waitlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Be the first to build your vault and test out new features.</p>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Your Email Address" />
          </Form.Group>
          <Button variant="dark" type="submit" className="mt-3 w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={handleClose}>Unsubscribe</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactUs;
