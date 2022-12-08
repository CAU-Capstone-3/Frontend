import React from "react";
import styled from "styled-components";
const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Gmarket Sans;
`;
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
  display: block;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding-bottom: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  width: 531px;
  height: 336px;
`;
const BlueBox = styled.div`
  width: 531px;
  height: 11px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const NameList = styled.div`
  .name {
    font-weight: bold;
    margin-left: 15px;
    text-align: left;
    border-bottom: 1px solid #9e9e9e;
  }
`;
export default function ResponseBox() {
  return (
    <Block>
      <Container>
        <BlueBox />
        <p>응답대기중</p>
        <NameList>
          <div className="name">김유진</div>
        </NameList>
      </Container>
    </Block>
  );
}
