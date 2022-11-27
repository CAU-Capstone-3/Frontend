import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import axios from "axios";
import styled from "styled-components";
import { TOPIC } from "../constants/serverConstant";
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const AnalysisPage = () => {
  const [results, setResults] = useState([""]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    // API GET 함수.
    await axios
      .get(TOPIC.GET_RESULT(23))
      .then((response) => {
        const data = response.data["result"];
        setResults(data);
        setLoading(false);
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

  return (
    <div>
      <Sidebar />
      <ResultTitle />
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {results.map(function (result) {
            return ResultPattern(result);
          })}
        </>
      )}
    </div>
  );
};

export default AnalysisPage;
