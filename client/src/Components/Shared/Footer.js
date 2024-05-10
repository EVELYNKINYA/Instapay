import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AppFooter = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Instapay. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;