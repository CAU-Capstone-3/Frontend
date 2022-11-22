import React from "react";
import styled from "styled-components";
import data3 from "../data3.json";
import Bars from "./ui/Bars";
const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;
const Advice = () => {
  return (
    <Container>
      <Bars title="2-3소켓" data={data3["result"]} />
    </Container>
  );
};

export default Advice;
