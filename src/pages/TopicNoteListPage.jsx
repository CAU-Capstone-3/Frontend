import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import TopicNoteListTitle from "../components/ui/TopicNoteListTitle";
const TopicNoteListPage = () => {
  return (
    <div>
      <Sidebar />
      <TopicNoteListTitle />
      {/*
      <ResultPattern />
      <ResultPattern /> */}
    </div>
  );
};

export default TopicNoteListPage;
