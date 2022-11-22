import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="w-[1440px] h-[1091px] relative overflow-hidden bg-[#f4f7ff]"></div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <h4>상품명</h4>
      <p>상품정보</p>
    </div>
  );
}
