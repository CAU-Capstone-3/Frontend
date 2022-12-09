import React from "react";
import styled from "styled-components";

// 과목별 토픽 목록

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

// -----------
const ComparisionDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  border-bottom: 1px;
  margin-bottom: 10px;
`;

const ComparisionDivRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4e60ff;
  /* border: 1px solid #bdbdbd; */
  border-radius: 10px;
  width: 75%;
  min-height: 130px;
  text-align: left;
  padding: 5px 10px;
  margin-bottom: 8px;
`;
const ComparisionDivRow2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #bdbdbd;
  /* border: 1px solid #bdbdbd; */
  border-radius: 10px;
  width: 60%;
  height: 70px;
  text-align: left;
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
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

const NoContradictionResultPattern = (results) => {
  return (
    <Container>
      <ComparisionDiv>
        {results["sentences"].map((sentence) => {
          return (
            <ComparisionDivRow>
              <ComparisonContent>{sentence["content"]}</ComparisonContent>
              <ComparisonName>{sentence["writerName"]}</ComparisonName>
            </ComparisionDivRow>
          );
        })}
        {results["advices"].map((advice) => {
          if (advice.length === 0) {
            return;
          }
          return <ComparisionDivRow2>{advice}</ComparisionDivRow2>;
        })}
      </ComparisionDiv>
      <ul>{Comment(results["comments"])}</ul>
    </Container>
  );
};

export default NoContradictionResultPattern;
