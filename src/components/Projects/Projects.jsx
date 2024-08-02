import stelesthetics from "../../assets/img/0.jpg";
import acmLogo from "../../assets/img/acm_logo.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Import the CSS file

export default function Projects() {
  return (
    <Container className="my-5" id="projects">
      <div className="mx-auto text-center py-5 projects-section">
        <h1 className="projects-title pb-5">Projects</h1>
        <Row>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3">
              <Card.Img
                src={stelesthetics}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3"
                style={{ height: "100px", width: "100px" }}
              />
              <Card.Body>
                <Card.Title className="text-center">Stelesthetics</Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <p>
                      This website, created using Webflow, features a modern and
                      user-friendly design. As you navigate, you&#39;ll find a
                      variety of skincare services, including facials, chemical
                      peels, lash lifts & tints, and brow lamination. Whether on
                      a desktop or a mobile device, the site&#39;s optimization
                      ensures a smooth experience, making it easy for potential
                      clients to book their next appointment.
                    </p>
                  </ul>
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://www.stelesthetics.net/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 rounded-3">
              <Card.Img
                src={acmLogo}
                position="top"
                alt="image"
                className="card-image mx-auto mt-3"
                style={{ height: "100px", width: "100px" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  ACM, CSUN Chapter
                </Card.Title>
                <Card.Text>
                  <ul className="list-unstyled">
                    <p>
                      Designed and developed the website using Bootstrap, HTML,
                      CSS, and JavaScript to improve functionality and design
                      for over 300 users. Ensured website functionality and
                      monitored user engagement with Google Analytics. Increased
                      user engagement by 15% by addressing bugs and improving
                      features based on user feedback.
                    </p>
                  </ul>
                </Card.Text>
                <div className="text-center">
                  <Button
                    href="https://csunacm.org/"
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in Touch!
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
