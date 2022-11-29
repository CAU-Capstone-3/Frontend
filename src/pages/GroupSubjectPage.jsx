import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import GroupSubjectTitle from "../components/ui/GroupSubjectTitle";
import GroupSubjectPattern from "../components/ui/GroupSubjectPattern";
import { GROUP } from "../constants/serverConstant";
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY3MDM1MDc3NiwiaWF0IjoxNjY5NzQ1OTc2LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.BovRMA2DSkRn47-fYwOitPz0PucrZYLp4wEsQEtlg_A";
// 과목별 토픽 목록
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
  const { groupId } = useParams();

  async function getData() {
    await axios
      .get(GROUP.GET_GROUP_SUBJECTS(groupId), {
        // groupId 받아와야함.
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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
  }, [groupId]);

  return (
    <div>
      <Sidebar />
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {GroupSubjectTitle(results["groupName"])}
          {GroupSubjectPattern(results["subjects"])}
        </>
      )}
    </div>
  );
}
