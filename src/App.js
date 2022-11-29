import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubjectTopicPage from "./pages/SubjectTopicPage";
import NoteWritePage from "./pages/NoteWritePage";
import TopicNoteListPage from "./pages/TopicNoteListPage";
import AnalysisPage from "./pages/AnalysisPage";
import GroupSubjectPage from "./pages/GroupSubjectPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/sign-up";
import Main from "./pages/Main";
import Header from "./components/Header";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  function loginCallBack(login) {
    setIsLogin(login);
  }

  return (
    // <>
    // <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/group/subject/:groupId" element={<GroupSubjectPage />} />
        <Route
          path="/group/subject/topic/:subjectId"
          element={<SubjectTopicPage />}
        />
        <Route
          path="/group/subject/topic/notes/:topicId"
          element={<TopicNoteListPage />}
        />
        <Route
          path="/group/subject/topic/write/:topicId"
          element={<NoteWritePage />}
        />
        <Route
          path="/group/subject/topic/detail/:noteId"
          element={<NoteDetailPage />}
        />
        <Route
          path="/group/subject/topic/result/:topicId"
          element={<AnalysisPage />}
        />
      </Routes>
    </BrowserRouter>
    /* <Outlet /> */
  );
}

export default App;
/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Subjects</Nav.Link>
              <Nav.Link href="#features">Topics</Nav.Link>
              <Nav.Link href="#pricing">Subjects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div> */
