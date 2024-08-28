import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/img/GARDEA1.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mx-auto">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#experience">Professional Experience</Nav.Link>
            <Nav.Link href="#projects">Development Projects</Nav.Link>
            {/* <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#contact">Get in Touch</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/gtech29">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/juan-rodriguez-26b39427a/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Nav.Link>
            <Nav.Link href="mailto: juan.rodriguez.517@my.csun.edu">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
