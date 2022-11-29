import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/헤더로고.png";

const Container = styled.div`
  display: flex;
  background-color: #333333;
  height: 80px;
`;
const Logo = styled.img`
  width: 155px;
  height: 30px;
  left: 30px;
  top: 30px;
  margin: 30px;
`;
export default function Header() {
  return (
    <Container>
      <Logo src={LogoSrc} />
    </Container>
  );
}
