import "./Experience.css";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBTypography } from "mdb-react-ui-kit";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="experience-container mx-auto" id="experience" >
      <Container>
        <div className="about-me p-4 shadow-4 rounded-3 blurred-border">
          <MDBTypography tag="h2" className="text-center" >Welcome to my site!</MDBTypography>
          <p>
            I am a results-oriented individual with a track record of deploying
            scalable solutions that drive innovation and efficiency. My
            experiences have deepened my understanding of software development,
            project management, and team collaboration. I thrive where
            creativity and technical expertise merge, creating solutions for
            both current and future needs.
          </p>
          <hr className="my-4" />
          <p>
            Explore my portfolio to see how creativity and technical expertise
            come together in my projects. Check it out and discover how I can
            contribute to your next big idea.
          </p>
          <div className="button-container">
            <Button href="mailto: juan.rodriguez.517@my.csun.edu" className="contact-button">
              Get in Touch!
            </Button>
          </div>
        </div>
      </Container>
      {/* <div className="icons-container row">
        Tech Stack
        <FaLinkedin size={40} />
        <FaGithub size={40} />
        <FaTwitter size={40} />
      </div> */}
    </div>
  );
}
