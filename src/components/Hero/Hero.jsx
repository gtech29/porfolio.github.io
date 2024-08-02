import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="mx-auto text-center bg-secondary py-5 hero-section">
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="mb-3">
          <Col>
            <h1 className={`display-1 ${isVisible ? "fade-in" : ""} `}>
              Juan Rodriguez
            </h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h4 className={`display-8 ${isVisible ? "fade-in" : ""} `}>
              Computer Science Student
            </h4>
            <p className={`display-6 ${isVisible ? "fade-in" : ""} `}>
              California State University, Northridge
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="outline-light"
              size="lg"
              href="https://gtech29.github.io/Juan_Rodriguez.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isVisible ? "fade-in" : ""}`}
            >
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
