import React, { useState } from "react";
import styled from "styled-components";
//그룹초대, 새로초대할 멤버

//화면전체
const Container = styled.div`
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
//그룹초대단어 박스
const Box = styled.div`
  .label {
    font-size: 16px;
    margin-top: 20px;
    margin-left: 20px;
    padding-bottom: 2rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 2px;
    border-bottom: 1px solid #cfcfcf;
  }
  display: block;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding-bottom: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  width: 571px;
  height: 336px;
`;

//박스위 파란모양지붕
const BlueBox = styled.div`
  width: 569px;
  height: 13px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
//초대할 사용자 아이디
const Label = styled.p`
  margin-top: 20px;
  text-align: left;
  margin-left: 20px;
  color: #8992a9;
  line-height: 14px;
  font-weight: bold;
  font-size: 14px;
`;
//input 박스
const StyledInput = styled.input`
  width: 505px;
  height: 48px;
  box-sizing: border-box;
  margin: 0.8rem 0;
  background: #f5f5f5;
  border: 1px solid rgba(137, 146, 169, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-left: 20px;
`;
const Button = styled.button`
  background: #263cff;
  border-radius: 16px;
  border: none;
  color: white;
  font-weight: bold;
  width: 129px;
  height: 48px;
  margin-top: 20px;
  margin-left: 20px;
`;
export default function GroupInvite() {
  return (
    <Container>
      <Box>
        <BlueBox />
        <div className="label">그룹초대</div>
        <Label>초대할 사용자 아이디</Label>
        <StyledInput type="input" placeholder="example@naver.com" />
        <Button>초대하기</Button>
      </Box>
    </Container>
  );
}
