import React from "react";
import styled from "styled-components";

const Container = styled.div`
  p {
    margin-left: 10px;
    margin: 0;
    font-weight: bold;
    text-align: left;
    letter-spacing: 2px;
    padding-bottom: 2rem;
    margin-left: 10px;
    margin-top: 10px;
  }

  display: flex;
  width: auto;
  flex-direction: column;
  margin: 15px;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;

  padding: 20px 0px;
`;
const BlueBox = styled.div`
  width: 531px;
  height: 11px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const NameList = styled.div`
  margin-bottom: 10px;
  .name {
    font-weight: bold;
    margin-left: 15px;
    text-align: left;
    border-bottom: 1px solid #9e9e9e;
  }
`;
export default function ResponseBox() {
  return (
    <Container>
      <BlueBox />
      <p>응답대기중</p>
      <NameList>
        <div className="name">김유진</div>
      </NameList>
      <NameList>
        <div className="name">장훈석</div>
      </NameList>
    </Container>
  );
}
