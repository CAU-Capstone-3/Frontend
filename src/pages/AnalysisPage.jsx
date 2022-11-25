import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import axios from "axios";
import { TOPIC } from "../constants/serverConstant";
const AnalysisPage = () => {
  // const [results, setResults] = useState([""]);
  // async function getData() {
  //   // API GET 함수.
  //   await axios
  //     .get(TOPIC.GET_RESULT(1))
  //     .then((response) => {
  //       const data = response.data["result"];
  //       setResults(data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // useEffect(() => {
  //   // 처음으로 이 페이지가 렌더링 될 때 useEffect로 함수를 실행시킨다.
  //   getData();
  // }, []);
  // TODO: 주석 풀기.

  // TODO: 없애기
  const results = [
    {
      adviceId: 1,
      advice: "상반되는 문장이 있어요.",
      sentence1: {
        sentenceId: 0,
        sentence: "제발 돼라",
        writerId: 0,
        writerName: "장훈석",
      },
      sentence2: {
        sentenceId: 0,
        sentence: "왜 안되는거야 진자",
        writerId: 0,
        writerName: "김형기",
      },
      comments: [
        {
          commentId: 0,
          userId: 0,
          userName: "string",
          content: "string",
          createdAt: "2022-11-18T00:58:15.933Z",
          updatedAt: "2022-11-18T00:58:15.934Z",
        },
      ],
    },
    {
      adviceId: 1,
      advice: "상반되는 문장이 있어요.",
      sentence1: {
        sentenceId: 0,
        sentence: "시발시발",
        writerId: 0,
        writerName: "장훈석",
      },
      sentence2: {
        sentenceId: 0,
        sentence: "다 죽일까",
        writerId: 0,
        writerName: "김찬수",
      },
      comments: [
        {
          commentId: 0,
          userId: 0,
          userName: "string",
          content: "string",
          createdAt: "2022-11-18T00:58:15.933Z",
          updatedAt: "2022-11-18T00:58:15.934Z",
        },
      ],
    },
  ];

  return (
    <div>
      <Sidebar />
      <ResultTitle />
      {results.map(function (result) {
        return ResultPattern(result);
      })}
    </div>
  );
};

export default AnalysisPage;
