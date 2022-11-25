import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import SubjectTopicTitle from "../components/ui/SubjectTopicTitle";
import SubjectTopicPattern from "../components/ui/SubjectTopicPattern";
// 과목별 토픽 목록

export default function SubjectTopicPage() {
  const navigate = useNavigate();
  const { subjectId, noteId } = useParams();
  const [top, setTop] = useState([""]);
  const [status, getStatus] = useState();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/topic/subject/${subjectId}`)
      .then((response) => {
        const data = response.data["result"];
        console.log(data);
        setTop(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Sidebar />
      <SubjectTopicTitle />
      <SubjectTopicPattern />
    </div>
  );
}
