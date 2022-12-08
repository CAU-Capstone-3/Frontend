import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SubjectTopicPattern from "../components/ui/SubjectTopicPattern";
import SubjectTopicTitle from "../components/ui/SubjectTopicTitle";
import { SUBJECT } from "../constants/serverConstant";
import Loading from "../components/Loader";
import Header from "../components/Header";
import api from "../utils/api";
const Loader = styled.span`
  text-align: center;
  display: block;
`;
export default function SubjectTopicPage() {
  // const navigate = useNavigate();
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { subjectId } = useParams();

  async function getData() {
    await api
      .get(SUBJECT.GET_TOPIC_LIST(subjectId), {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
      }) //subjectId
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
          {SubjectTopicTitle(
            "토픽목록",
            `${results["subjectName"]}`,
            subjectId
          )}
          {SubjectTopicPattern(results["topics"])}
        </>
      )}
    </div>
  );
}
