import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebarpast/Sidebar";
import SubjectTopicPattern from "../components/ui/SubjectTopicPattern";
import Title from "../components/ui/Title";
import { SUBJECT } from "../constants/serverConstant";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTc0NTU0NSwiaWF0IjoxNjY5NzM4MzQ1LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.5cmIK31ti-AWWostqzzfk_UErIWrbOnQzfxOpM7QlJY";
// 과목별 토픽 목록
const Loader = styled.span`
  text-align: center;
  display: block;
`;
export default function SubjectTopicPage() {
  // const navigate = useNavigate();
  // const [status, getStatus] = useState();
  // const { subjectId, noteId } = useParams();
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { subjectId } = useParams();

  async function getData() {
    await axios
      .get(SUBJECT.GET_TOPIC_LIST(subjectId), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) //subjectId
      .then((response) => {
        const results = response.data["result"];
        setResults(results);
        setLoading(false);
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
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {Title("토픽목록", "컴퓨터통신")}
          {SubjectTopicPattern(results)}
        </>
      )}
    </div>
  );
}
