import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Edit from "../../assets/연필.png";
import Rem from "../../assets/쓰레기통.png";
import axios from "axios";
import { useParams } from "react-router-dom";
//과목목록
// const Container = styled.div`
//   margin-left: 20px;
//   display: flex;
//   width: auto;
//   flex-direction: column;
//   align-items: center;
//   margin-left: 16rem;
//   padding: 0 4rem;
//   margin-top: 20px;
// `;
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;

  padding: 20px 0px;
`;
const WhiteBox = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border: 2px solid #e0e0e0;
  width: 1100px;
  background-color: #fdfdfd;
  border-radius: 16px;
`;
const Li = styled.li`
  overflow: auto;
  text-align: left;
  justify-content: space-between;
  display: flex;
  margin-top: 0.5em;
  padding: 1em;
  &:nth-child(even) {
    background: #e1f5fe;
  }
`;
const Tilte = styled.h3`
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline #3b72ff;
  text-align: center;
  margin-bottom: 15px;
`;
//연필버튼
const EditButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${Edit});
  border: none;
  background-color: transparent;
  margin-right: 10px;
`; //쓰레기통버튼
const RemButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  background-image: url(${Rem});
  border: none;
`;
export default function SubjectListEdit() {
  return (
    <Container>
      <Tilte>과목목록</Tilte>
      <WhiteBox>
        <ul>
          <Li>
            코딩부트캠프
            <div>
              <EditButton />
              <RemButton />
            </div>
          </Li>
          <Li>
            데이터베이스설계
            <div>
              <EditButton />
              <RemButton />
            </div>
          </Li>
          <Li>
            데이터베이스설계
            <div>
              <EditButton />
              <RemButton />
            </div>
          </Li>
          <Li>
            데이터베이스설계
            <div>
              <EditButton />
              <RemButton />
            </div>
          </Li>
        </ul>
      </WhiteBox>
    </Container>
  );
}
