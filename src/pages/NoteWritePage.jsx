import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Containter = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 2rem;
  padding: 50px;
`;
export default function NoteWritePage() {
  const { topicId } = useParams();
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const register = () => {
    axios
      .post(`http://18.189.150.89:8080/api/note`, {
        writerId: 1,
        content: content,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Containter>
      <textarea
        placeholder="글을 입력해 주세요..."
        width=""
        border="none"
        resize="none"
        value={content}
        onChange={handleChange}
      />
      <button type="button" onClick={register}>
        저장
      </button>
    </Containter>
  );
}
