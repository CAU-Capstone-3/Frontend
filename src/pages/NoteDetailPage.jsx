import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/ui/Title";
import NoteDetailPattern from "../components/ui/NoteDetailPattern";
import { NOTE } from "../constants/serverConstant";
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
  // const { subjectId } = useParams();
  async function getData() {
    await axios
      .get(NOTE.GET_DETAIL_NOTE(2)) // noteId
      .then((response) => {
        const results = response.data["result"];
        setResults(results);
        setLoading(false);
        console.log(results);
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
      {Title("2-3 패킷 스위칭", "김형기")}
      {/* TODO: 제목 부분 바꾸기 */}
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>{NoteDetailPattern(results)}</>
      )}
    </div>
  );
}
