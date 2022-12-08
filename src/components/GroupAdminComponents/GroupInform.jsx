import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
//그룹정보 or 그룹 명 변경 하기
const Container = styled.div`
  .label {
    border-bottom: 2px solid #e0e0e0;
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding: 2rem;
  width: 1036px;
  height: 250px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 16px;
`;
const StyledInput = styled.input`
  width: 1000px;
  height: 48px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  background: #fdfdfd;
  border: 1px solid rgba(137, 146, 169, 0.2);
  border-radius: 16px;
  padding: 0 1rem;
`;
const Button = styled.button`
  background: #263cff;
  border-radius: 16px;
  border: none;
  color: white;
  font-weight: bold;
  justify-content: center;
  width: 129px;
  height: 48px;
  align-items: center;
  margin-top: 30px;
`;
export default function GroupInform() {
  const [title, setTitle] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://18.189.150.89:8080/api/groups");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="label">그룹정보</div>
      <p>그룹명</p>
      <form onSubmit={SubmitHandler}>
        <StyledInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Button type="submit">변경하기</Button>
      </form>
    </Container>
  );
}
