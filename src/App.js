import React from "react";
import "./App.css";
import SubjectList from "./component/SubjectList";
import { Routes, Route, useNavigate } from "react-router-dom";
import SubjectSection from "./component/SubjectSectionList";
import NoteWritePage from "./component/NoteWritePage";
import DetailNote from "./component/DetailNote";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
function App() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            놋치지마!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/note/sectionId");
                }}
              >
                노트작성하기
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/note/section/1");
                }}
              >
                과목별
              </Nav.Link>
              <NavDropdown title="페이지" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">목차</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/note/section/1");
                  }}
                >
                  섹션별
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/section/subject");
                  }}
                >
                  과목별리스트
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/advice/sectionId");
                  }}
                >
                  노트분석
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
            </>
          }
        />
        <Route path="/section/subject" element={<SubjectList />} />
        <Route path="/note/section/1" element={<SubjectSection />} />
        <Route path="/note/sectionId" element={<NoteWritePage />} />
        <Route path="/detail" element={<DetailNote />} />
      </Routes>
    </div>
  );
}

export default App;
