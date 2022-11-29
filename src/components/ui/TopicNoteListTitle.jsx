import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
`;

const TitleResult = styled.div`
  flex-direction: row;
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -1%;
  line-height: auto;
  color: #263cff;
`;

const TitleTopicDiv = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 16px;
  gap: 10px;
`;

const TitleTopicText = styled.div`
  flex-direction: row;
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1%;
  line-height: auto;
`;

const TopicNoteListTitle = (topic) => {
  return (
    <TitleDiv>
      <TitleResult>{topic}</TitleResult>
      <TitleTopicText>미작성된 노트가 있습니다!</TitleTopicText>
      <TitleTopicDiv></TitleTopicDiv>
    </TitleDiv>
  );
};

export default TopicNoteListTitle;
