import React from "react";
import styled from "styled-components";

const ProgressButton = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  background-color: #eaf6ff;
  border: 1px solid #5db8ff;
`;
const text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: Gotham;
  letter-spacing: -5%;
  line-height: 100%;
  color: #15476d;
`;
const DoneButton = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  background-color: #f5fef5;
  border: 1px solid #83e181;
`;

const Buttons = () => {
  return (
    <ProgressButton>
      <text1>진행중</text1>
    </ProgressButton>
  );
};

export default Buttons;
