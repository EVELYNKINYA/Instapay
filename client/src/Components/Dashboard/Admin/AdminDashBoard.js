import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProfitTrends from './ProfitTrends';
import TransactionSummary from './TransactionSummary';

const AdminDashboard = ({ userRole }) => {
  // Assuming userRole is passed as a prop from your authentication logic
  if (userRole !== 'admin') {
    // If the user is not an admin, return null or a message indicating unauthorized access
    return null; // You can also redirect to a different page
  }

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Profit Trends</Card.Title>
              <ProfitTrends />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Transaction Summary</Card.Title>
              <TransactionSummary />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
