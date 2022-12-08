import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
// import "../App.css";
const Div = styled.div`
  height: 1200px;
  width: 76rem;
  background-color: #263cff;
`;
const Container = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;

  /* 이 아래는 삭제 해야함. */
  border-style: solid;
`;
const Button = styled.button`
  font-size: 25px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  width: 15%;
  margin-top: 10px;
  border-radius: 15px;
`;
const Main = () => {
  return (
    <>
      <Sidebar />
      <Container>
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
                <br />
                <br />
                <br />
                <br />
                <h1 className="note_title">시작하세요!</h1>
              </div>
            </section>
          </div>
        </Div>
      </Container>
    </>
  );
};
export default Main;
