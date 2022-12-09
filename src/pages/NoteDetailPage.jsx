import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NoteDetailTitle from "../components/ui/NoteDetailTitle";
import NoteDetailPattern from "../components/ui/NoteDetailPattern";
import api from "../utils/api";
import { NOTE } from "../constants/serverConstant";
import Loading from "../components/Loader";
import Header from "../components/Header";
// 과목별 토픽 목록

export default function SubjectTopicPage() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { noteId } = useParams();

  async function getData() {
    await api
      .get(NOTE.GET_DETAIL_NOTE(noteId))
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
