import React from "react";
import { Button, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={6} className="mb-2 text-end">
          <Link to="/users">
            <Button variant="danger" size="lg">
              USER
            </Button>
          </Link>
        </Col>
        <Col xs={6} className="mb-2">
          <Link to="/items">
            <Button variant="dark" size="lg">
              ITEMS
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
