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
const SubjectTopicPattern = () => {
  return (
    <Container>
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
        <li>
          <TopicBarRow>
            <TopicBarColumnDiv1>
              <TopicBarText>2-3 패킷스위칭</TopicBarText>
            </TopicBarColumnDiv1>
            <TopicBarColumnDiv2>
              <TopicBarText>분석중</TopicBarText>
            </TopicBarColumnDiv2>
            <TopicBarColumnDiv3>
              <TopicBarText>2022.11.20</TopicBarText>
            </TopicBarColumnDiv3>
          </TopicBarRow>
        </li>
        <li>
          <TopicBarRow>
            <TopicBarColumnDiv1>
              <TopicBarText>2-3 패킷스위칭</TopicBarText>
            </TopicBarColumnDiv1>
            <TopicBarColumnDiv2>
              <TopicBarText>분석중</TopicBarText>
            </TopicBarColumnDiv2>
            <TopicBarColumnDiv3>
              <TopicBarText>2022.11.20</TopicBarText>
            </TopicBarColumnDiv3>
          </TopicBarRow>
        </li>
        <li>
          <TopicBarRow>
            <TopicBarColumnDiv1>
              <TopicBarText>2-3 패킷스위칭</TopicBarText>
            </TopicBarColumnDiv1>
            <TopicBarColumnDiv2>
              <TopicBarText>분석중</TopicBarText>
            </TopicBarColumnDiv2>
            <TopicBarColumnDiv3>
              <TopicBarText>2022.11.20</TopicBarText>
            </TopicBarColumnDiv3>
          </TopicBarRow>
        </li>
      </ul>
    </Container>
  );
};

export default SubjectTopicPattern;
