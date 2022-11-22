import React from "react";
import Deposits from "../components/ui/Deposits";
import data2 from "../../src/data2.json";
import styled from "styled-components";
const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  const data = data2.result;
  console.log(data);

  return (
    <Container>
      <Deposits title="컴퓨터통신" data={data2.result} />
    </Container>
  );
};

export default Main;
