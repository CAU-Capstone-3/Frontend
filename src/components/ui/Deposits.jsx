import React from "react";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import Deposit from "./Deposit";
const Container = styled.div``;

const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;
const Deposits = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SortingBar />
      {data.map((top) => (
        <Deposit data={top} key={top.topicId} />
      ))}
    </Container>
  );
};

export default Deposits;
