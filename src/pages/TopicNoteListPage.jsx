import React, { useState, useEffect } from "react";
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
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  async function getData() {
    await axios
      .get(TOPIC.GET_NOTE_LIST(2)) //topicId
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
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <TopicNoteListTitle />
          {TopicNoteListPattern(results)}
        </>
      )}
    </div>
  );
};

export default TopicNoteListPage;
