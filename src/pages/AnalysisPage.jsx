import React, { useState, useEffect, useRef, useCallback } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import axios from "axios";
import styled from "styled-components";
import REGISTER from "../assets/등록.png";
import { TOPIC, ADVICE } from "../constants/serverConstant";
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const RegisterButton = styled.button.attrs({
  type: `button`,
})`
  height: 50px;
`;
const CommentRegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 250px;
`;
const InputTextArea = styled.textarea`
  resize: none;
  width: 85%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  margin-bottom: 15px;
  overflow: hidden;
  margin-right: 5px;
  height: 50px;
`;

const AnalysisPage = () => {
  const [results, setResults] = useState([""]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

  async function getData() {
    // API GET 함수.
    await axios
      .get(TOPIC.GET_RESULT(23))
      .then((response) => {
        const data = response.data["result"];
        setResults(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    // 처음으로 이 페이지가 렌더링 될 때 useEffect로 함수를 실행시킨다.
    getData();
  }, []);
  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    // textarea 가변 높이
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);
  function handleSetContent(e) {
    setContent(e.target.value);
  }

  async function postComment() {
    // POST 요청은 body에 실어 보냄
    await axios
      .post(ADVICE.POST_COMMEND(1), {
        userId: 3,
        // content: `${content}`,
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
      <ResultTitle />
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {results.map((result) => {
            console.log(result);
            return (
              <div>
                {ResultPattern(result)}
                <CommentRegisterDiv>
                  <InputTextArea
                    ref={textRef}
                    value={content}
                    onChange={(e) => handleSetContent(e)}
                    onInput={handleResizeHeight}
                    placeholder="댓글을 작성해 주세요"
                  ></InputTextArea>
                  <RegisterButton onClick={postComment}>
                    <img src={REGISTER} alt="댓글등록" />
                  </RegisterButton>
                </CommentRegisterDiv>
              </div>
            );
          })}
        </>
      )}
      {/* {CreateEachPattern(results)} */}
    </div>
  );
};

export default AnalysisPage;
