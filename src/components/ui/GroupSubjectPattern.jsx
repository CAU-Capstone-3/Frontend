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
const SubjectBoxDiv = styled.button`
  display: flex;
  font-size: 30px;
  background-color: #f5f3f3;
  width: 40%;
  height: 90%;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  border-top: 15px solid #3649f9;
  margin: 20px;
`;

const SubjectTopicPattern = (subjects) => {
  function CreateSubjectRow(subject) {
    const subjectName = subject["name"];
    const subjectId = subject["subjectId"];
    function onClick() {
      window.location.href = `/group/subject/topic/${subjectId}`;
    }
    return <SubjectBoxDiv onClick={onClick}>{subjectName}</SubjectBoxDiv>;
  }
  return (
    <Container>
      <SubjectDiv>
        {subjects.map((subject) => {
          return CreateSubjectRow(subject);
        })}
      </SubjectDiv>
    </Container>
  );
};

export default SubjectTopicPattern;
