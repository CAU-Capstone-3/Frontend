import React from "react";
import styled from "styled-components";

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

const TopicTitleBarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263cff;

  height: 70px;

  border-bottom: 1px;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
`;

const TopicTitleBarText = styled.span`
  font-size: 25px;
  font-family: Gmarket Sans;
  font-weight: 800;
  color: #ffffff;
`;

const SubjectTopicPattern = () => {
  return (
    <Container>
      <TopicTitleBarRow>
        <TopicTitleBarText>제목</TopicTitleBarText>
        <TopicTitleBarText>분석 상황</TopicTitleBarText>
        <TopicTitleBarText>최종 수정 시간</TopicTitleBarText>
      </TopicTitleBarRow>

      <ul>
        <li></li>
      </ul>
    </Container>
  );
};

export default SubjectTopicPattern;
