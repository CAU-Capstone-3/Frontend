import React from "react";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function App() {
  return (
    <>
      <div classNmae="App">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/">Main</Route>
            <Route paht="/">WritePage</Route>
            <Route paht="/">TopicBoard</Route>
            <Route paht="/">ResultPage</Route>
          </Routes>
        </BrowserRouter> */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Subjects</Nav.Link>
              <Nav.Link href="#features">Topics</Nav.Link>
              <Nav.Link href="#pricing">Subjects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <Outlet />
    </>
  );
}

export default App;
