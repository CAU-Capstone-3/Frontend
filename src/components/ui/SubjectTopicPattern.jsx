import React from "react";
import styled from "styled-components";
import IMG_BEFORE from "../../assets/분석전.png";
import IMG_ING from "../../assets/분석중.png";
import IMG_AFTER from "../../assets/분석완료.png";
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import Title from "./Title";

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
`;
//---------------
const TopicTitleBarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #263cff;

  height: 70px;

  border-bottom: 1px;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
`;
const TopicTitleBarDiv1 = styled.div`
  width: 33%;
`;
const TopicTitleBarDiv2 = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const TopicTitleBarDiv3 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TopicTitleBarText = styled.span`
  font-size: 25px;
  font-family: Gmarket Sans;
  font-weight: 800;
  color: #ffffff;
`;
//------------
const TopicBarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;

  height: 70px;

  border-bottom: 1px;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
`;
const TopicBarColumnDiv1 = styled.div`
  width: 33%;
`;
const TopicBarColumnDiv2 = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const TopicBarColumnDiv3 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TopicBarText = styled.span`
  font-size: 25px;
  font-family: Gmarket Sans;
  font-weight: 800;
  color: #212121;
`;
//-----------
// img src 담당.
const TopicBarStatusBefore = styled.img.attrs({ src: `${IMG_BEFORE}` })``;
const TopicBarStatusIng = styled.img.attrs({ src: `${IMG_ING}` })``;
const TopicBarStatusAfter = styled.img.attrs({ src: `${IMG_AFTER}` })``;

function TopicList(title, status, time) {
  if (status === "READY") status = <TopicBarStatusBefore />;
  else if (status === "RUNNING") status = <TopicBarStatusIng />;
  else if (status === "FINISH") status = <TopicBarStatusAfter />;
  return (
    <li>
      <TopicBarRow>
        <TopicBarColumnDiv1>
          <TopicBarText>{title}</TopicBarText>
        </TopicBarColumnDiv1>
        <TopicBarColumnDiv2>{status}</TopicBarColumnDiv2>
        <TopicBarColumnDiv3>
          <TopicBarText>2022.11.20</TopicBarText>
        </TopicBarColumnDiv3>
      </TopicBarRow>
    </li>
  );
}

//------
const SubjectTopicPattern = () => {
  return (
    <Container>
      {/* 파란색 제목 바 */}
      {/* 이건 한번만 씀. */}
      <TopicTitleBarRow>
        <TopicTitleBarDiv1>
          <TopicTitleBarText>제목</TopicTitleBarText>
        </TopicTitleBarDiv1>
        <TopicTitleBarDiv2>
          <TopicTitleBarText>분석 상황</TopicTitleBarText>
        </TopicTitleBarDiv2>
        <TopicTitleBarDiv3>
          <TopicTitleBarText>최종 수정 시간</TopicTitleBarText>
        </TopicTitleBarDiv3>
      </TopicTitleBarRow>
      <ul>
        {TopicList("2-3 패킷스위칭", "READY", "2022.11.20")}
        {TopicList("2-4 신뢰성 있는 전송", "RUNNING", "2022.11.20")}
        {TopicList("2-5 오류검출", "FINISH", "2022.11.20")}
      </ul>
    </Container>
  );
};

export default SubjectTopicPattern;
