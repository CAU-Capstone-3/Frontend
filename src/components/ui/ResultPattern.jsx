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

/**
 *
 * @param {array} result 분석결과 API 통해 받은 데이터.
 * result[0] -> result 접근.
 * result[0].sentence1.sentence : 첫번째 sentence
 * result[0].sentence2.sentence : 두번째 sentence
 *
 * @returns
 */
const ResultPattern = (result) => {
  return (
    <Container>
      <TitleDiv>
        <TitleText>{result.advice}</TitleText>
      </TitleDiv>
      {/* --------------- */}
      {/* 이 부분 중복해서 쓰기. */}
      <ComparisionDiv>
        <ComparisionDivRow>
          <ComparisionText>{result.sentence1.sentence}</ComparisionText>
          {/* TODO: writername 추가 */}
        </ComparisionDivRow>
        <ComparisionDivRow>
          <ComparisionText>{result.sentence2.sentence}</ComparisionText>
          {/* TODO: writername 추가 */}
        </ComparisionDivRow>
      </ComparisionDiv>
      {/* ------------- */}
      <ul>
        <li>
          <CommentDiv>
            <CommentText>{result.comments[0].userName}</CommentText>
          </CommentDiv>
          <CommentDiv>
            <CommentText>{result.comments[1].userName}</CommentText>
          </CommentDiv>
          <CommentDiv>
            <CommentText>{result.comments[2].userName}</CommentText>
          </CommentDiv>
        </li>
      </ul>
    </Container>
  );
};

export default ResultPattern;
