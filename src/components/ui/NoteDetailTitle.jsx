// 모든 페이지 타이틀 통합.
import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  width: 100rem;
  font-family: Gmarket Sans;
  margin-left: 16rem;
  position: relative;
  padding: 0 2rem;
  margin-top: 20px;
`;
const TitleResult = styled.div`
  flex-direction: row;
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: Gmarket Sans;
  line-height: auto;
  color: #000000;
`;
const TitleTopicDiv = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 16px;
  gap: 10px;
`;
const TitleTopicText = styled.div`
  text-align: center;
  /* vertical-align: top; */
  font-size: 20px;
  line-height: 15%;
  color: #263cff;
  font-weight: 900;
`;

const Title = (subjectName, topicName, writerName) => {
  return (
    <TitleDiv>
      <TitleResult>
        {subjectName}/{topicName}
      </TitleResult>
      <TitleTopicDiv>
        <TitleTopicText>{writerName}</TitleTopicText>
        {/* TitleTopicText안 text를 설정가능하게끔 바꾸기 */}
      </TitleTopicDiv>
    </TitleDiv>
  );
};

export default Title;
