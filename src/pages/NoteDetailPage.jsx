import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Title from "../components/ui/Title";
import NoteDetailTitle from "../components/ui/NoteDetailTitle";
import NoteDetailPattern from "../components/ui/NoteDetailPattern";
import api from "../utils/api";
import { NOTE } from "../constants/serverConstant";
import Loading from "../components/Loader";

import Header from "../components/Header";
// 과목별 토픽 목록

export default function SubjectTopicPage() {
  // const navigate = useNavigate();
  // const [status, getStatus] = useState();
  // const { subjectId, noteId } = useParams();
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { noteId } = useParams();

  async function getData() {
    await api
      .get(NOTE.GET_DETAIL_NOTE(noteId), {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
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
      <Header />
      <Sidebar />

      {/* TODO: 제목 부분 바꾸기 */}
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {NoteDetailTitle(
            results["subjectName"],
            results["topicName"],
            results["writerName"]
          )}
          {NoteDetailPattern(results)}
        </>
      )}
    </div>
  );
}
