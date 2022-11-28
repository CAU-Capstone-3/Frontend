import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import { TOPIC } from "../constants/serverConstant";
import TopicNoteListTitle from "../components/ui/TopicNoteListTitle";
import TopicNoteListPattern from "../components/ui/TopicNoteListPattern";
import styled from "styled-components";

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const TopicNoteListPage = () => {
  useEffect(() => {
    // 처음으로 이 페이지가 렌더링 될 때 useEffect로 함수를 실행시킨다.
    getData();
  }, []);

  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { topicId } = useParams();

  async function getData() {
    await axios
      .get(TOPIC.GET_NOTE_LIST(topicId)) //topicId
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

  return (
    <div>
      <Sidebar />
      <TopicNoteListTitle />
      {loading ? <Loader>Loading...</Loader> : TopicNoteListPattern(results)}
    </div>
  );
};

export default TopicNoteListPage;
