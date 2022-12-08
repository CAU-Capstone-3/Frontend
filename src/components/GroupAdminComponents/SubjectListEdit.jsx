import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Edit from "../../assets/연필.png";
import Rem from "../../assets/쓰레기통.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { GROUP, SUBJECT } from "../../constants/serverConstant";
import Modal from "../Modal";
import PLUS_ICON from "../../assets/그룹추가.png";
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
const PlusImg = styled.img.attrs({ src: `${PLUS_ICON}` })`
  margin-right: 14px;
  height: 23px;
`;
const PlusDiv = styled.div`
  margin-top: 5px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 8px;
  height: 3rem;
  align-items: center;
  border-bottom: 1px;

  &:hover {
    background-color: rgba(54, 73, 249, 0.2);
    cursor: pointer;
    border-right: solid 5px #3649f9;
  }
`;
const MyPageSpan = styled.span`
  color: #34353c;
  font-weight: 600;
  font-size: 18px;
`;
const InputTextArea = styled.textarea`
  resize: none;
  width: 85%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;

  overflow: hidden;
  margin-right: 5px;
  height: 50px;
`;
const AddDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const AddButton = styled.div`
  border: 2px solid;
  border-radius: 7px;
  color: #ffffff;
  background-color: #0f62fe;
  height: 50px;
  width: 70px;
  font-size: 20px;
  padding-top: 7px;
`;

export default function SubjectListEdit() {
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const { groupId } = useParams();
  function handleSetContent(e) {
    setContent(e.target.value);
  }
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  async function postSubjectName(subjectName) {
    if (subjectName.length === 0) {
      console.log("1글자 이상!");
    } else {
      await api
        .post(SUBJECT.POST_CREATE_SUBJECT, {
          groupId: `${groupId}`,
          subjectName: `${subjectName}`,
        }) //subjectId
        .then((response) => {
          const results = response.data["result"];
          console.log(results);
          closeModal();
          window.location.reload();
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <Container>
      <Tilte>과목목록</Tilte>
      <button onClick={openModal}>
        <PlusDiv>
          <PlusImg />
          <MyPageSpan>과목 추가</MyPageSpan>
        </PlusDiv>
      </button>
      <Modal open={modalOpen} close={closeModal} header="과목 추가">
        <AddDiv>
          <InputTextArea
            onChange={(e) => handleSetContent(e)}
            placeholder="과목명을 입력해주세요."
          ></InputTextArea>
          <button>
            <AddButton
              onClick={() => {
                postSubjectName(content);
              }}
            >
              추가
            </AddButton>
          </button>
        </AddDiv>
      </Modal>
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
