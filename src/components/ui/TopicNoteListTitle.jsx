import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
  /* height: 48px;
  width: 320px; */
  margin-top: 20px;
`;
const TitleResult = styled.div`
  flex-direction: row;
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-family: Gmarket Sans;
  letter-spacing: -1%;
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
  font-size: 18px;
  font-family: Gmarket Sans;
  line-height: 22%;
  color: #263cff;
  font-weight: 900;
`;

const TopicNoteListTitle = () => {
  return (
    <TitleDiv>
      <TitleResult>노트목록</TitleResult>
      <TitleTopicDiv>
        <TitleTopicText>2-3. 패킷 스위칭</TitleTopicText>
        {/* TitleTopicText안 text를 설정가능하게끔 바꾸기 */}
      </TitleTopicDiv>
    </TitleDiv>
  );
};

export default TopicNoteListTitle;
