import React from "react";
import "./App.css";
import SubjectList from "./component/SubjectList";
import { Routes, Route, Link } from "react-router-dom";
import SubjectSection from "./component/SubjectSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/section/subject" element={<SubjectList />} />
        <Route path="/note/section/1" element={<SubjectSection />} />
      </Routes>
    </div>
  );
}

export default App;
