import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import SubjectTopicPage from "./pages/SubjectTopicPage";
import TopicNotePage from "./pages/TopicNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AnalResultPage from "./pages/AnalResultPage";
import Table from "./pages/Table";
import Home from "./pages/Home";
import ListItem from "./components/ui/ListItem";
import MenuBar from "./components/ui/MenuBar";
import Sidebar from "./components/Sidebar";
import Subjecttopi from "./pages/Subjecttopi";
import AnalsisResultPage from "./pages/AnalsisResultPage";
import Grids from "./pages/Grids";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "topic/subject/:subjectId", element: <SubjectTopicPage /> }, //과목별토픽목록
      { path: "note/topic/:topicId", element: <TopicNotePage /> }, //토픽별노트목록
      { path: "note/:noteId", element: <NoteDetailPage /> }, //노트상세조회
      { path: "advice/:topicId", element: <AnalResultPage /> }, //분석결과조회
      { path: "table", element: <Table /> }, //분석결과조회
      { path: "main", element: <Home /> }, //홈
      { path: "list", element: <ListItem /> }, //홈
      { path: "menu", element: <MenuBar /> },
      { path: "sidebar", element: <Sidebar /> },
      { path: "sub", element: <Subjecttopi /> },
      { path: "analsisresult", element: <AnalsisResultPage /> }, //분석결과댓글페이지
      { path: "grids", element: <Grids /> }, //분석결과댓글페이지
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
