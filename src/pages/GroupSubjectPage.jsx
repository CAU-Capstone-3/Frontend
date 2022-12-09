import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import GroupSubjectTitle from "../components/ui/GroupSubjectTitle";
import GroupSubjectPattern from "../components/ui/GroupSubjectPattern";
import { GROUP } from "../constants/serverConstant";
import Loading from "../components/Loader";
import Header from "../components/Header";
import api from "../utils/api";
// 과목별 토픽 목록

export default function SubjectTopicPage() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { groupId } = useParams();

  async function getData() {
    await api
      .get(GROUP.GET_GROUP_SUBJECTS(groupId)) //subjectId
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
  }, [groupId]);

  return (
    <div>
      <Header />
      <Sidebar />
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {GroupSubjectTitle(results["groupName"], groupId)}
          {GroupSubjectPattern(results["subjects"])}
        </>
      )}
    </div>
  );
}
