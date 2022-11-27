import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;
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
const ComparisonName = styled.div`
  margin-top: auto;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;
const ComparisonContent = styled.div`
  margin-bottom: auto;
  font-size: 20px;
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const CommentName = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 20px;
  font-size: 15px;
  font-family: Gmarket Sans;
  font-weight: 600;
  color: #212121;
`;
const CommentContent = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 18px;
  line-height: 24px;
`;
function Comment(comments) {
  return (
    <li>
      {comments.map((comment) => {
        const userName = comment["userName"];
        const content = comment["content"];
        return (
          <CommentDiv>
            <CommentName>{userName}</CommentName>
            <CommentContent>{content}</CommentContent>
          </CommentDiv>
        );
      })}
    </li>
  );
}
const ResultPattern = (results) => {
  return (
    <Container>
      <TitleDiv>
        <TitleText>{results["advice"]}</TitleText>
      </TitleDiv>
      {/* --------------- */}
      {/* 이 부분 중복해서 쓰기. */}
      <ComparisionDiv>
        <ComparisionDivRow>
          <ComparisonContent>
            {results["sentence1"]["sentence"]}
          </ComparisonContent>
          <ComparisonName>{results["sentence1"]["writerName"]}</ComparisonName>

          {/* TODO: writername 추가 */}
        </ComparisionDivRow>
        <ComparisionDivRow>
          {/* <ComparisionText>{results["sentence2"]["sentence"]}</ComparisionText> */}
          {/* TODO: writername 추가 */}
          <ComparisonContent>
            {results["sentence2"]["sentence"]}
          </ComparisonContent>
          <ComparisonName>{results["sentence2"]["writerName"]}</ComparisonName>
        </ComparisionDivRow>
      </ComparisionDiv>
      {/* ------------- */}
      <ul>{Comment(results["comments"])}</ul>
    </Container>
  );
};

export default ResultPattern;
