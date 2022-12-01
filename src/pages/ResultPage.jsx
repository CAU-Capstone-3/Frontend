import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResultTitle from "../components/ui/ResultTitle";
import ResultPattern from "../components/ui/ResultPattern";
import axios from "axios";
import styled from "styled-components";
import REGISTER from "../assets/등록.png";
import { TOPIC, ADVICE } from "../constants/serverConstant";
import Sidebar from "../components/Sidebar";
import { myUserId } from "../loginInformation";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY3MDM1MDc3NiwiaWF0IjoxNjY5NzQ1OTc2LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.BovRMA2DSkRn47-fYwOitPz0PucrZYLp4wEsQEtlg_A";
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

// const useInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   return { value };
// };

const AnalysisPage = () => {
  const [results, setResults] = useState([""]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const { topicId } = useParams();
  async function getData() {
    // API GET 함수.
    await axios
      .get(TOPIC.GET_RESULT(topicId), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
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

  async function postComment(e, adviceId) {
    // POST 요청은 body에 실어 보냄
    e.preventDefault();
    await axios
      .post(
        ADVICE.POST_COMMEND(adviceId),
        {
          userId: 3,
          content: `${content}`,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const name = "";

  return (
    <div>
      <Sidebar />

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {ResultTitle(results["title"])}
          {results["advices"].map((result) => {
            return (
              <div>
                {ResultPattern(result)}
                <CommentRegisterDiv>
                  <InputTextArea
                    {...name}
                    onChange={(e) => handleSetContent(e)}
                    onInput={handleResizeHeight}
                    placeholder="댓글을 작성해 주세요"
                  ></InputTextArea>
                  <RegisterButton
                    onClick={(e) => {
                      postComment(e, result["adviceId"]);
                    }}
                  >
                    <img src={REGISTER} alt="댓글등록" />
                  </RegisterButton>
                </CommentRegisterDiv>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AnalysisPage;
