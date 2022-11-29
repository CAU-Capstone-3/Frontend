import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SubjectTopicPattern from "../components/ui/SubjectTopicPattern";
import Title from "../components/ui/Title";
import { SUBJECT } from "../constants/serverConstant";
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY3MDM1MDc3NiwiaWF0IjoxNjY5NzQ1OTc2LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.BovRMA2DSkRn47-fYwOitPz0PucrZYLp4wEsQEtlg_A";
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
