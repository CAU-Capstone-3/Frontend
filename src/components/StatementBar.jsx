import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  padding: 1rem 1rem;
  background-color: #0a6ddf;
  margin: 2rem 0;
  border-radius: 5px;
`;

const Text = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`;

const Updated = styled(Text)`
  width: 40%;
`;

const StatementBar = () => {
  return (
    <Container>
      <Updated>분석된 문장이 있어요!</Updated>
    </Container>
  );
};

export default StatementBar;
