import React from "react";
import "./MainPage.css";
import styled from "styled-components";
import loginButton from "../assets/로그인버튼.png";
import signUpButton from "../assets/회원가입버튼.png";
import SignUp from "./sign-up/sign-up";
const Div = styled.div`
  height: 1000px;
  background-color: #263cff;
`;
const buttonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoginButtonImg = styled.img.attrs({ src: `${loginButton}` })``;
const SignUpButtonImg = styled.img.attrs({ src: `${signUpButton}` })``;
const LoginButton = styled.button`
  margin-left: 100px;
  margin-right: 20px;
`;
const SignUpButton = styled.button``;
export default function MainPage() {
  function login() {
    window.location.href = `/login`;
  }
  function signUp() {
    window.location.href = `/sign-up`;
  }
  return (
    <Div>
      <div>
        <nav id="navbar">
          <div class="navbar__logo">
            <a>놋치지마</a>
          </div>

          <button class="navbar__toggle-btn">
            <i class="fas fa-bars"></i>
          </button>
        </nav>
        <section id="note">
          <div className="note__container">
            <h1 className="note__title">
              스마트한 인공지능 AI로 <br />
              <br />
              스마트한 스터디를 해보세요!
            </h1>
            <h2 className="note__description">
              스터디원들과 함께하는 노트 분석!
            </h2>
          </div>
        </section>
        <buttonDiv>
          <LoginButton onClick={login}>
            <LoginButtonImg />
          </LoginButton>
          <SignUpButton onClick={signUp}>
            <SignUpButtonImg />
          </SignUpButton>
        </buttonDiv>
      </div>
    </Div>
  );
}
