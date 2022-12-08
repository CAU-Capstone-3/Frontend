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
const Button = styled.button``;
export default function Header() {
  function onClick() {
    window.location.href = `/`;
  }
  return (
    <Container>
      <Button onClick={onClick}>
        <Logo src={LogoSrc} />
      </Button>
    </Container>
  );
}
