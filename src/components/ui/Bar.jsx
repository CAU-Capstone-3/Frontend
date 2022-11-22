import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;

  &:hover {
    box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6);
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Text = styled.h1`
  font-size: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const Sentence = styled(Text)`
  width: 40%;
`;
const Comment = styled(Text)`
  width: 100%;
`;

const Margin = styled.div`
  width: 20%;
`;
const Property = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const PropertyStreet = styled(Text)`
  font-size: 0.8rem;
`;
const Subtitle = styled(Text)`
  font-size: 1rem;
  color: black;
  margin-top: 2px;
`;
const Bar = ({ data }) => {
  const { sentence1, sentence2, comments } = data;
  console.log(sentence1.sentence);
  console.log(sentence2.sentence);

  return (
    <div>
      <Container>
        <br />
        <PropertyText>
          <PropertyStreet>{sentence1.writerName}</PropertyStreet>
          <Subtitle>{sentence1.sentence}</Subtitle>
        </PropertyText>
        <Margin></Margin>
        <PropertyText>
          <PropertyStreet>{sentence2.writerName}</PropertyStreet>
          <Subtitle>{sentence2.sentence}</Subtitle>
        </PropertyText>
      </Container>
      <br />
      <br />
      <Input placeholder="댓글을 달아주세요.." />
    </div>
  );
};

export default Bar;
