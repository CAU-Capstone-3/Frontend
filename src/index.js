// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import SubjectTopicPage from "./pages/SubjectTopicPage";

import NoteWritePage from "./pages/NoteWritePage";
import TopicNoteListPage from "./pages/TopicNoteListPage";
import AnalysisPage from "./pages/AnalysisPage";
import NotionPage from "./pages/NotionPage";
import NoteDetailPage from "./pages/NoteDetailPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       { path: "topic/subject/:subjectId", element: <SubjectTopicPage /> }, //과목 별 토픽 목록
//       { path: "note/topic/:topicId", element: <TopicNoteListPage /> }, //토픽별 노트 목록
//       { path: "note/:noteId", element: <NoteDetailPage /> }, //노트 상세 조회
//       { path: "note", element: <NoteWritePage /> }, //노트 작성 페이지
//       { path: "advice", element: <AnalysisPage /> }, //문장 분석 결과 페이지
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
