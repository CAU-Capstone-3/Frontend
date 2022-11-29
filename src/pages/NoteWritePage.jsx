import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Title from "../components/ui/Title";
import { NOTE } from "../constants/serverConstant";
import COMPLETE from "../assets/작성완료.png";
// 과목별 토픽 목록
const CompleteButtonImg = styled.img.attrs({ src: `${COMPLETE}` })``;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
`;

const InputTextArea = styled.textarea`
  resize: none;
  width: 85%;
  /* height: 150px; */
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  margin-bottom: 15px;
  overflow: hidden;
`;

const RequestButton = styled.button.attrs({
  type: `submit`,
})``;

export default function SubjectTopicPage() {
  // const navigate = useNavigate();
  // const [status, getStatus] = useState();
  // const { subjectId, noteId } = useParams();
  const [results, setResults] = useState();
  const [content, setContent] = useState("");

  // const [loading, setLoading] = useState(true);
  const { topicId } = useParams();

  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    // textarea 가변 높이
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const handleSetContent = (e) => {
    // onChange함수.
    setContent(e.target.value);
  };
  const handleSetTab = (e) => {
    // textarea에서 tab 입력받기
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + "\t" + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      handleSetContent(e);
      return false; //  prevent focus
    }
  };

  async function postNote() {
    //topicId, userId
    // POST 요청은 body에 실어 보냄
    await axios
      .post(NOTE.POST_WRITE, {
        //topicId, userId
        topicId: `${topicId}`,
        userId: 3,
        content: `${content}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Sidebar />
      {Title("2-3 패킷 스위칭", "김형기")}
      <Container>
        <InputTextArea
          ref={textRef}
          value={content}
          onChange={(e) => handleSetContent(e)}
          onKeyDown={(e) => handleSetTab(e)}
          onInput={handleResizeHeight}
          placeholder="노트를 작성해 주세요."
        ></InputTextArea>
        <RequestButton onClick={postNote}>
          <CompleteButtonImg />
        </RequestButton>
      </Container>
    </div>
  );
}
