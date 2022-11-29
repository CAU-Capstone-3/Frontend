import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebarpast/Sidebar";
import Title from "../components/ui/Title";
import NoteDetailPattern from "../components/ui/NoteDetailPattern";
import api from "../utils/api";
import { NOTE } from "../constants/serverConstant";
// 과목별 토픽 목록
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTc0NTU0NSwiaWF0IjoxNjY5NzM4MzQ1LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.5cmIK31ti-AWWostqzzfk_UErIWrbOnQzfxOpM7QlJY";

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
  const { noteId } = useParams();

  async function getData() {
    await axios
      .get(NOTE.GET_DETAIL_NOTE(noteId), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) // noteId
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
