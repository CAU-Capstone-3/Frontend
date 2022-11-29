import React from "react";
import styled from "styled-components";

// import Title from "./Title";

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

const SubjectDiv = styled.div`
  display: flex;
  width: 90%;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const SubjectBoxDiv = styled.div`
  display: flex;
  font-size: 35px;
  background-color: #f5f3f3;
  width: 40%;
  height: 90%;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  border-top: 15px solid #3649f9;
  margin: 20px;
`;
let result = "";
//----------
function CreateSubjectRow(subject, index) {
  const subjectName = subject["name"];

  return <SubjectBoxDiv>{subjectName}</SubjectBoxDiv>;
}
//'2022-11-10T04:05:39.000+00:00'
//------

const SubjectTopicPattern = (subjects) => {
  return (
    <Container>
      <SubjectDiv>
        {subjects.map((subject, index) => {
          return CreateSubjectRow(subject, index);
        })}
      </SubjectDiv>
      {/* <SubjectBoxDiv>데이터베이스</SubjectBoxDiv>
        <SubjectBoxDiv>컴퓨터통신</SubjectBoxDiv> */}
    </Container>
  );
};

export default SubjectTopicPattern;
