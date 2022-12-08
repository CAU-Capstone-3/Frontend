import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { TOPIC, SUBJECT } from "../constants/serverConstant";
import Loading from "../components/Loader";
import NoteAnalysisAdmin from "../components/SubjectAdminComponents/NoteAnalysisAdmin";
import api from "../utils/api";
import Header from "../components/Header";

const WhiteBox = styled.div`
  .label {
    border-bottom: 1px solid #cfcfcf;
    display: flex;
    padding-bottom: 1rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 20px;
    margin-top: 24px;
  }
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding: 2rem;
  width: auto;
  margin-bottom: 20px;
  height: 230px;
  background: white;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 16px;
`;
//박스위 파란모양지붕
const BlueBox = styled.div`
  width: 1010px;
  height: 13px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const StyledInput = styled.input`
  width: 850px;
  height: 48px;
  box-sizing: border-box;
  margin: 0.8rem 0;
  background-color: #f6f7f9;
  background: #fdfdfd;
  border: 1px solid rgba(137, 146, 169, 0.2);
  border-radius: 16px;
  padding: 14px;
  transition: all 0.2s ease-in;
`;
const Button = styled.button`
  background-color: #263cff;
  border-radius: 16px;
  border: none;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  justify-content: center;
  width: 100px;
  height: 48px;
  text-align: center;
  align-items: center;
  justify-content: center;
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
  background-color: #f6f6f6;
`;
const Div = styled.div`
  /* background-color: #f6f6f6; */
`;
export default function SubjectAdminPage() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const { subjectId } = useParams();
  async function getData() {
    await api
      .get(SUBJECT.GET_TOPIC_LIST(subjectId)) //subjectId
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
  function handleSetContent(e) {
    setContent(e.target.value);
  }

  async function postTopicName(topicName) {
    if (topicName.length === 0) {
      console.log("1글자 이상!");
    } else {
      await api
        .post(TOPIC.POST_NEW_TOPIC, {
          subjectId: `${subjectId}`,
          title: `${topicName}`,
        }) //subjectId
        .then((response) => {
          const results = response.data["result"];
          console.log(results);
          window.location.reload();
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <Div>
      <Header />
      <Sidebar />

      {loading ? (
        <Loading></Loading>
      ) : (
        <Container>
          <WhiteBox>
            <BlueBox />
            <div className="label">과목정보</div>
            <StyledInput
              type="text"
              placeholder="토픽 이름"
              onChange={handleSetContent}
            />
            <Button
              onClick={() => {
                postTopicName(content);
              }}
            >
              추가 하기
            </Button>
          </WhiteBox>
          <Div>{NoteAnalysisAdmin(results["topics"])}</Div>
        </Container>
      )}
    </Div>
  );
}
