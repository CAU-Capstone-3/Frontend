import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import WritePage from "./pages/WritePage";
import NotFound from "./pages/NotFound";
import SubjectTopic from "./pages/SubjectTopic";
import Home from "./pages/Home";
import AnalsisResult from "./pages/AnalsisResult";
import AnalsisRequest from "./pages/AnalsisRequest";
import TopicList from "./pages/TopicList";
import NoteDetail from "./pages/NoteDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> }, //메인페이지
      { path: "/note", element: <WritePage /> }, //글쓰기
      { path: "/note/topic/:topicId", element: <TopicList /> }, //토픽별노트목록조회
      { path: "/topic/subject/:subjectId", element: <SubjectTopic /> }, //과목별토픽목록조회
      { path: "/advice/:topicId", element: <AnalsisResult /> }, //분석결과
      { path: "/topic/advice/:topic", element: <AnalsisRequest /> }, //분석요청
      { path: "/note/:noteId", element: <NoteDetail /> }, //노트상세조회
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
