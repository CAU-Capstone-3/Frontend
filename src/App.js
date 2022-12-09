import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubjectTopicPage from "./pages/SubjectTopicPage";
import NoteWritePage from "./pages/NoteWritePage";
import TopicNoteListPage from "./pages/TopicNoteListPage";
import AnalysisPage from "./pages/ResultPage";
import GroupSubjectPage from "./pages/GroupSubjectPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import GroupAdminPage from "./pages/GroupAdminPage";
import SubjectAdminPage from "./pages/SubjectAdminPage";
import Main from "./pages/Main";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/sign-up";
import UserAdminPage from "./pages/UserAdminPage";
import MainPage from "./pages/MainPage";
import NewAnalysisPage from "./pages/NewAnalysisPage";
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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<Main />} />
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
        <Route path="/group/admin/:groupId" element={<GroupAdminPage />} />
        <Route
          path="/subject/admin/:subjectId"
          element={<SubjectAdminPage />}
        />
        <Route path="/user/admin" element={<UserAdminPage />} />
        <Route path="advice" element={<NewAnalysisPage />} />
      </Routes>
    </BrowserRouter>
    /* <Outlet /> */
  );
}

export default App;
