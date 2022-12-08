import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import GroupSubjectTitle from "../components/ui/GroupSubjectTitle";
import GroupSubjectPattern from "../components/ui/GroupSubjectPattern";
import { GROUP } from "../constants/serverConstant";
import Loading from "../components/Loader";
import { myUserId, accessToken } from "../loginInformation";
import Header from "../components/Header";
import api from "../utils/api";
// 과목별 토픽 목록
const Loader = styled.span`
  text-align: center;
  display: block;
`;
export default function SubjectTopicPage() {
  // const [status, getStatus] = useState();
  // const { subjectId, noteId } = useParams();
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const { groupId } = useParams();
  //   const navigate = useNavigate();
  async function getData() {
    await api
      .get(
        GROUP.GET_GROUP_SUBJECTS(groupId)
        //   {
        //     // groupId 받아와야함.
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`,
        //     },
        //   }
      ) //subjectId
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
