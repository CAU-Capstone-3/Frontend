import React, { useState } from "react";
import styled from "styled-components";
import COMPLETE from "../../assets/완료팀원 (1).png";
import NOT_COMPLETE from "../../assets/미완료 팀원 (1).png";
import NOTE_BUTTON from "../../assets/노트보기.png";
import WRITE_BUTTON from "../../assets/글쓰기버튼.png";
import CANT_WRITE_BUTTON from "../../assets/글쓰기불가버튼.png";
import { myUserId, accessToken } from "../../loginInformation";
import { TOPIC } from "../../constants/serverConstant";
import axios from "axios";

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  font-family: Gmarket Sans;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  margin-top: 20px;
  border-style: solid;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
`;
//---------------
const TopicTitleBarRow = styled.div`
  display: flex;
  border-bottom: 1px;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
`;
const TopicTitleBarDiv1 = styled.div`
  width: 33%;
  margin-right: 15px;
`;
const TopicTitleBarDiv2 = styled.div`
  display: flex;
  width: 15%;

  align-items: center;
  border-radius: 10px;
  justify-content: center;
  margin-left: 500px;
  background-color: #263cff;
`;

const TopicTitleBarText = styled.span`
  font-size: 30px;
  font-family: Gmarket Sans;
  font-weight: 800;
`;
const TopicTitleBarText2 = styled.span`
  font-size: 30px;
  font-family: Gmarket Sans;
  font-weight: 800;

  color: #ffffff;
`;
//-----------
// img src 담당.
//------
const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  /* margin-right: auto; */
`;
const ImgDivRow = styled.div`
  width: 50%;
`;
const CompleteImg = styled.img.attrs({ src: `${COMPLETE}` })``;
const NotCompleteImg = styled.img.attrs({ src: `${NOT_COMPLETE}` })``;
//-----------
const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const LeftDiv = styled.div`
  width: 50%;
  padding: 12px 12px 12px 12px;
`;
const RightDiv = styled.div`
  width: 50%;
  padding: 12px 12px 12px 12px;
`;
const TitleBarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #263cff;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
  height: 60px;
`;
const TitleBarDiv1 = styled.div`
  width: 33%;
`;
const TitleBarDiv2 = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const TitleBarDiv3 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TitleBarText = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
`;
//----------
// 왼쪽 부분
const NoteListBarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
  height: 60px;
`;
const NoteListBarDiv1 = styled.div`
  width: 33%;
`;
const NoteListBarDiv2 = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const NoteListBarDiv3 = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NoteListBarText = styled.span`
  font-size: 16px;
  font-weight: 800;
`;
const NoteButton = styled.button.attrs({
  type: `submit`,
})``;
const NoteButtonImg = styled.img.attrs({ src: `${NOTE_BUTTON}` })``;
const AdviceButton = styled.button``;
function NoteList(noteId, name, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  time = `${year}.${month}.${day}`;
  function onClick() {
    window.location.href = `/group/subject/topic/detail/${noteId}`;
  }
  return (
    <li>
      <NoteListBarRow>
        <NoteListBarDiv1>
          <NoteListBarText>{name}</NoteListBarText>
        </NoteListBarDiv1>
        <NoteListBarDiv2>
          <NoteListBarText>{time}</NoteListBarText>
        </NoteListBarDiv2>
        <NoteListBarDiv3>
          <NoteButton onClick={onClick}>
            <NoteButtonImg />
          </NoteButton>
        </NoteListBarDiv3>
      </NoteListBarRow>
    </li>
  );
}
// -------
// 오른쪽 부분
const NoteWriteButtonImg = styled.img.attrs({ src: `${WRITE_BUTTON}` })``;
const CantNoteWriteButtonImg = styled.img.attrs({
  src: `${CANT_WRITE_BUTTON}`,
})``;
function UnwrittenList(topicId, userId, userName) {
  function onClick() {
    window.location.href = `/group/subject/topic/write/${topicId}`;
  }
  if (myUserId !== userId) {
    return (
      <li>
        <NoteListBarRow>
          <NoteListBarDiv1>
            <NoteListBarText>{userName}</NoteListBarText>
          </NoteListBarDiv1>
          <NoteListBarDiv2></NoteListBarDiv2>
          <NoteListBarDiv3>
            <CantNoteWriteButtonImg />
          </NoteListBarDiv3>
        </NoteListBarRow>
      </li>
    );
  } else {
    return (
      <li>
        <NoteListBarRow>
          <NoteListBarDiv1>
            <NoteListBarText>{userName}</NoteListBarText>
          </NoteListBarDiv1>
          <NoteListBarDiv2></NoteListBarDiv2>
          <NoteListBarDiv3>
            <NoteButton onClick={onClick}>
              <NoteWriteButtonImg />
            </NoteButton>
          </NoteListBarDiv3>
        </NoteListBarRow>
      </li>
    );
  }
}
const TopicNoteListPattern = (results) => {
  async function postResult() {
    //topicId, userId
    // POST 요청은 body에 실어 보냄
    await axios
      .post(
        TOPIC.POST_RESULT(results["topicId"]),
        {},
        {
          // groupId 받아와야함.
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function onClick() {
    window.location.href = `/group/subject/topic/result/${results["topicId"]}`;
  }

  return (
    <Container>
      <TopicTitleBarRow>
        <TopicTitleBarDiv1>
          <TopicTitleBarText>노트 목록</TopicTitleBarText>
        </TopicTitleBarDiv1>

        <TopicTitleBarDiv2>
          <AdviceButton onClick={onClick}>
            <TopicTitleBarText2>분석 결과</TopicTitleBarText2>
          </AdviceButton>
        </TopicTitleBarDiv2>
        {/* <TopicTitleBarDiv2>
          <button onClick={postResult}>
            <TopicTitleBarText>토픽 분석</TopicTitleBarText>
          </button>
        </TopicTitleBarDiv2> */}
      </TopicTitleBarRow>
      {/* ----------- */}
      <ImgDiv>
        <ImgDivRow>
          <CompleteImg />
        </ImgDivRow>
        <ImgDivRow>
          <NotCompleteImg />
        </ImgDivRow>
      </ImgDiv>
      {/* ------------- */}
      <Div>
        <LeftDiv>
          <TitleBarRow>
            <TitleBarDiv1>
              <TitleBarText>팀원</TitleBarText>
            </TitleBarDiv1>
            <TitleBarDiv2>
              <TitleBarText>최종 수정 시간</TitleBarText>
            </TitleBarDiv2>
            <TitleBarDiv3></TitleBarDiv3>
          </TitleBarRow>

          <ul>
            {results["notes"].map(function (result) {
              return NoteList(
                result["noteId"],
                result["ownerName"],
                result["updatedAt"]
              );
            })}
          </ul>
        </LeftDiv>
        {/* ----------- */}
        <RightDiv>
          <TitleBarRow>
            <TitleBarDiv1>
              <TitleBarText>팀원</TitleBarText>
            </TitleBarDiv1>
            <TitleBarDiv2>
              <TitleBarText></TitleBarText>
            </TitleBarDiv2>
            <TitleBarDiv3></TitleBarDiv3>
          </TitleBarRow>

          <ul>
            {results["unwrittenUsers"].map(function (result) {
              return UnwrittenList(
                results["topicId"],
                result["userId"],
                result["userName"]
              );
            })}
          </ul>
        </RightDiv>
        {/* ----------- */}
      </Div>
    </Container>
  );
};

export default TopicNoteListPattern;
