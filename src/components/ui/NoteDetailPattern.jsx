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
  font-family: Gmarket Sans;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
`;

const DetailDiv = styled.div`
  background-color: #f2f2f2;
  display: flex;
  margin-top: 20px;
  padding: 20px 20px;
  width: auto;
  min-height: 500px;
`;
const SentenceDiv = styled.span`
  font-weight: 900;
  font-size: 20px;
  color: #212121;
`;

const DetailList = (sentence) => {
  return (
    <li>
      <SentenceDiv>{sentence}</SentenceDiv>
    </li>
  );
};
const NoteDetailPattern = (results) => {
  return (
    <Container>
      <DetailDiv>
        <ul>
          {results["sentenceList"].map((sentence) => {
            return DetailList(sentence["content"]);
          })}
        </ul>
      </DetailDiv>
    </Container>
  );
};

export default NoteDetailPattern;
