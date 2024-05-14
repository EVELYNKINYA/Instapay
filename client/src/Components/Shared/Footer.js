import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Instapay</p>
          </Col>
          <Col md={3}>
        <h6>Links</h6>
        <ul className="list-unstyled">
          <li>
            <Link to="/privacy-policy" className="text-light">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="text-light">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </Col>
          <Col md={3}>
            <h6>Follow Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-light"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-light"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;