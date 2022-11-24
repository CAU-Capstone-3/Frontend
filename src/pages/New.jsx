import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Advice from "../components/Advice";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
const New = () => {
  return (
    <div>
      <Sidebar />
      <ResultTitle />
      <ResultPattern />
      <ResultPattern />
      {/* <Advice /> */}
    </div>
  );
};

export default New;
