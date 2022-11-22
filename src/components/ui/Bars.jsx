import React from "react";
import styled from "styled-components";
import StatementBar from "../StatementBar";
import Bar from "./Bar";
const Container = styled.div``;

const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;
const Bars = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StatementBar />
      {data.map((top) => (
        <Bar data={top} key={data.adviceId} />
      ))}
    </Container>
  );
};

export default Bars;
