
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"

const Contact = () => {
  return (
    <footer className="contact-section text-white mx-auto py-4" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            {/* <h5>Get in Touch</h5> */}
            <h5>
              If you&apos;d like to get in contact with me, please do not
              hesitate to email me!
            </h5>

            <Form>
              {/* <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group> */}
              <Button
                variant="outline-light"
                size="lg"
                href="mailto:juan.rodriguez.517@my.csun.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="my-3"
              >
                Get in Touch
              </Button>
            </Form>
          </Col>
          <Col md={6} className="text-md-right">
            <p>
              &copy; {new Date().getFullYear()} Juan Rodriguez.
              <br />
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
