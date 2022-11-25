import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";

const AnalysisPage = () => {
  return (
    <div>
      <Sidebar />
      <ResultTitle />
      <ResultPattern />
      <ResultPattern />
    </div>
  );
};

export default AnalysisPage;
