import React from "react";
import styled from "styled-components";
const Container = styled.div`
  /* 레이아웃 */

  display: flex;
  padding: 1rem 1rem;
  background-color: #0a6ddf;
  margin: 4rem;
  border-radius: 5px;
`;

const Text = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`;
/*topicId*/
const Index = styled(Text)`
  width: 10%;
`;
/*topic title*/
const Title = styled(Text)`
  width: 35%;
`;
/*topic 업데이트날짜ui */
const Updated = styled(Text)`
  width: 40%;
`;
/*topic 분석유무ui */

const Analized = styled(Text)`
  width: 20%;
`;

const SortingBar = () => {
  return (
    /* list 구분바 */

    <Container>
      <Index>index</Index>
      <Title>Title</Title>
      <Updated>UpdatedAt</Updated>
      <Analized>분석상황</Analized>
    </Container>
  );
};

export default SortingBar;
