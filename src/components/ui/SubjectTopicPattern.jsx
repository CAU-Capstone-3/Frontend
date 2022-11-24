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

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const TitleText = styled.span`
  /* text-align: center; */
  vertical-align: top;
  font-size: 20px;
  font-family: Gmarket Sans;
  font-weight: 900;
  color: #263cff;
  margin-bottom: 10px;
`;

// -----------
const ComparisionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px;
  margin-bottom: 10px;
`;

const ComparisionDivRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #263cff;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  width: 45%;
  height: 150px;
  text-align: left;
  padding: 5px 10px;
`;
//------
const ComparisionText = styled.span`
  vertical-align: top;
  font-size: 20px;
  font-family: Gmarket Sans;
  font-weight: 800;
  color: #ffffff;
`;
//----
const CommentDiv = styled.div`
  display: flex;
  background-color: #f2f2f2;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px 10px;
`;
const CommentText = styled.span`
  vertical-align: top;
  font-size: 15px;
  font-family: Gmarket Sans;
  font-weight: 600;
  color: #212121;
`;

const SubjectTopicPattern = () => {
  return (
    <Container>
      <TitleDiv>
        <TitleText>상반된 내용이 있습니다!</TitleText>
      </TitleDiv>
      {/* --------------- */}
      {/* 이 부분 중복해서 쓰기. */}
      <ComparisionDiv>
        <ComparisionDivRow>
          <ComparisionText>Sentence</ComparisionText>
        </ComparisionDivRow>
        <ComparisionDivRow>
          <ComparisionText>Sentence</ComparisionText>
        </ComparisionDivRow>
      </ComparisionDiv>
      {/* ------------- */}
      <ul>
        <li>
          {/* <CommentDiv>
            <CommentText>장훈석</CommentText>
          </CommentDiv>
          <CommentDiv></CommentDiv>
          <CommentDiv></CommentDiv> */}
        </li>
      </ul>
    </Container>
  );
};

export default SubjectTopicPattern;
