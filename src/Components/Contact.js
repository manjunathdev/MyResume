import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarComponent from "./Navbar";
import Card from "react-bootstrap/Card";

const Contact = ({ loggedIn, username }) => {
  return (
    <Container>
      {loggedIn ? (
        <div>
          <NavbarComponent username={username} />
          <Card className="mt-4" style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                <p>
                  <span class="fw-medium">Github:</span>{" "}
                  <a
                    href="https://github.com/manjunathdev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/manjunathdev
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <Link to="/">Login</Link>
        </div>
      )}
    </Container>
  );
};

export default Contact;
