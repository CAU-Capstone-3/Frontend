import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Bar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">놋치지마!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/topic/subject/1")}>
              과목토픽
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/note")}>글쓰기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
