import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import SubjectTopicPage from "./pages/SubjectTopicPage";
import TopicNotePage from "./pages/TopicNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AnalsisResultPage from "./pages/AnalsisResultPage";
import WritePage from "./pages/WritePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "topic/subject/:subjectId", element: <SubjectTopicPage /> }, //과목별토픽목록
      { path: "note/topic/:topicId", element: <TopicNotePage /> }, //토픽별노트목록
      { path: "note/:noteId", element: <NoteDetailPage /> }, //노트상세조회
      { path: "advice/:topicId", element: <AnalsisResultPage /> }, //분석페이지
      { path: "note/:noteId", element: <WritePage /> }, //노트작성페이지
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
