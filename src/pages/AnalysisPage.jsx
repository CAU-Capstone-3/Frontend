import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import axios from "axios";
import { TOPIC } from "../constants/serverConstant";
const AnalysisPage = () => {
  const [results, setResults] = useState([""]);
  async function getData() {
    await axios
      .get(TOPIC.GET_RESULT(1))
      .then((response) => {
        const data = response.data["result"];
        setResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    // 처음으로 이 페이지가 렌더링 될 때 useEffect로 함수를 실행시킨다.
    getData();
  }, []);

  function resultRender(result) {
    ResultPattern(result);
  }
  return (
    <div>
      <Sidebar />
      <ResultTitle />
      {/* <ResultPattern />
      <ResultPattern /> */}
      {results.forEach((result) => resultRender(result))}
    </div>
  );
};

export default AnalysisPage;
