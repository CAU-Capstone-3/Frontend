import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { TOPIC, SUBJECT } from "../constants/serverConstant";
import Loading from "../components/Loader";
import NoteAnalysisAdmin from "../components/SubjectAdminComponents/NoteAnalysisAdmin";
import api from "../utils/api";
import Modal from "../components/Modal";
import PLUS_ICON from "../assets/그룹추가.png";
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0px;
  background-color: #f6f6f6;
`;
const Div = styled.div`
  /* background-color: #f6f6f6; */
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
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
export default function SubjectAdminPage() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const { subjectId } = useParams();
  async function getData() {
    await api
      .get(SUBJECT.GET_TOPIC_LIST(subjectId)) //subjectId
      .then((response) => {
        const results = response.data["result"];
        setResults(results);
        setLoading(false);
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSetContent(e) {
    setContent(e.target.value);
  }
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  async function postTopicName(topicName) {
    if (topicName.length === 0) {
      console.log("1글자 이상!");
    } else {
      await api
        .post(TOPIC.POST_NEW_TOPIC, {
          subjectId: `${subjectId}`,
          title: `${topicName}`,
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
  useEffect(() => {
    getData();
  }, []);
  return (
    <Div>
      <Sidebar />

      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <button onClick={openModal}>
            <PlusDiv>
              <PlusImg />
              <MyPageSpan>토픽 추가</MyPageSpan>
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
                    postTopicName(content);
                  }}
                >
                  추가
                </AddButton>
              </button>
            </AddDiv>
          </Modal>
          {NoteAnalysisAdmin(results["topics"])}
        </>
      )}
    </Div>
  );
}
