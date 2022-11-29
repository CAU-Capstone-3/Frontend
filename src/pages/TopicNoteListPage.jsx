import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import axios, { AxiosHeaders } from "axios";
import { TOPIC } from "../constants/serverConstant";
import TopicNoteListTitle from "../components/ui/TopicNoteListTitle";
import TopicNoteListPattern from "../components/ui/TopicNoteListPattern";
import styled from "styled-components";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTY4OTkyMSwiaWF0IjoxNjY5NjgyNzIxLCJlbWFpbCI6ImtoazIxMTExM0BuYXZlci5jb20ifQ.WN0AbgSfKR8ayqUiKkAihdzeBq01leyRfPy9ZtvGZA8";
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
      .get(TOPIC.GET_NOTE_LIST(topicId), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) //topicId
      // .get("/api/topics/2/notes", {
      //   headers: {
      //     Authorization: `${accessToken}`,
      //   },
      // }) //topicId
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
