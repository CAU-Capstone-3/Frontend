import React from "react";
import styled from "styled-components";
import COMPLETE from "../../assets/완료팀원 (1).png";
import NOT_COMPLETE from "../../assets/미완료 팀원 (1).png";
import NOTE_BUTTON from "../../assets/노트보기.png";
import WRITE_BUTTON from "../../assets/글쓰기버튼.png";
import CANT_WRITE_BUTTON from "../../assets/글쓰기불가버튼.png";
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
`;
const TopicTitleBarText = styled.span`
  font-size: 30px;
  font-family: Gmarket Sans;
  font-weight: 800;
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
const NoteButtonImg = styled.img.attrs({ src: `${NOTE_BUTTON}` })``;

function NoteList(name, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  time = `${year}.${month}.${day}`;

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
          <NoteButtonImg />
        </NoteListBarDiv3>
      </NoteListBarRow>
    </li>
  );
}
// -------
// 오른쪽 부분
const TopicNoteListPattern = (results) => {
  return (
    <Container>
      <TopicTitleBarRow>
        <TopicTitleBarDiv1>
          <TopicTitleBarText>노트 목록</TopicTitleBarText>
        </TopicTitleBarDiv1>
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
            {results.map(function (result) {
              return NoteList(result["ownerName"], result["updatedAt"]);
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

          <ul>{/* TODO */}</ul>
        </RightDiv>
        {/* ----------- */}
      </Div>
    </Container>
  );
};

export default TopicNoteListPattern;
