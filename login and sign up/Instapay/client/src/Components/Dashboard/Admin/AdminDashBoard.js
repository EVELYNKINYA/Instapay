import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProfitTrends from './ProfitTrends';
import TransactionSummary from './TransactionSummary';

const AdminDashboard = () => {
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