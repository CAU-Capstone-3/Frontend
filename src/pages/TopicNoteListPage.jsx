import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { TOPIC } from "../constants/serverConstant";
import TopicNoteListTitle from "../components/ui/TopicNoteListTitle";
import TopicNoteListPattern from "../components/ui/TopicNoteListPattern";
import Loading from "../components/Loader";
import Header from "../components/Header";
import api from "../utils/api";

const TopicNoteListPage = () => {
  useEffect(() => {
    // 처음으로 이 페이지가 렌더링 될 때 useEffect로 함수를 실행시킨다.
    getData();
  }, []);

  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { topicId } = useParams();

  async function getData() {
    await api
      .get(TOPIC.GET_NOTE_LIST(topicId), {})
      .then((response) => {
        const results = response.data["result"];
        setResults(results);
        setLoading(false);
        console.log(results["topicName"]);
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Header />
      <Sidebar />

      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {TopicNoteListTitle(results["topicName"])}
          {TopicNoteListPattern(results)}
        </>
      )}
    </div>
  );
};

export default TopicNoteListPage;
