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
                  <span class="fw-medium">Email:</span>{" "}
                  manjunath.deva123@gmail.com
                </p>
                <p>
                  <span class="fw-medium">Mobile:</span> 9743291903
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
