import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import SubjectTopicPattern from "../components/ui/SubjectTopicPattern";
import Title from "../components/ui/Title";
import { SUBJECT } from "../constants/serverConstant";
// 과목별 토픽 목록

export default function SubjectTopicPage() {
  // const navigate = useNavigate();
  // const [status, getStatus] = useState();
  // const { subjectId, noteId } = useParams();
  const [results, setResults] = useState();

  async function getData() {
    await axios
      .get(SUBJECT.GET_TOPIC_LIST(2))
      .then((response) => {
        const results = response.data["result"];
        setResults(results);
        console.log(results);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Sidebar />
      {Title("토픽목록", "컴퓨터통신")}
      {SubjectTopicPattern(results)}
    </div>
  );
}
