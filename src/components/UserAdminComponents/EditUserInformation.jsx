import React from "react";
import styled from "styled-components";
//userId 받아와야함

const UserUpdate = styled.div`
  p {
    margin: 0;
    font-weight: bold;
    text-align: left;
    display: block;
    letter-spacing: 2px;
    padding-bottom: 2rem;
  }
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding: 2rem;
  width: 500px;
  height: 418px;
  padding-bottom: 0.5rem;
  background: white;
  border-radius: 16px;
  background-color: #ffffff;
`;
const NameForm = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
  }
`;
const ButtonWithMarginTop = styled.div`
  margin-top: 3rem;
`;

const StyledInput = styled.input`
  width: 424px;
  height: 48px;
  box-sizing: border-box;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  background: #fdfdfd;
  border: 1px solid rgba(137, 146, 169, 0.2);
  border-radius: 16px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
`;
const Button = styled.button`
  width: 399px;
  height: 48px;
  text-align: center;
  align-items: center;
  border-radius: 16px;
  background-color: #3b72ff;
  border: none;
  color: white;
  font-weight: bold;
  justify-content: center;
  margin-top: 10px;
  display: flex;
`;

export default function EditInform() {
  return (
    <UserUpdate>
      <div className="logo-area">
        <h3>개인정보수정</h3>
      </div>
      <NameForm>
        <p>닉네임</p>
      </NameForm>
      <StyledInput />

      <NameForm>
        <p>비밀번호</p>
      </NameForm>
      <StyledInput />

      <Button>변경하기</Button>
    </UserUpdate>
  );
}
