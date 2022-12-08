import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { USERS } from "../constants/serverConstant";
import HOME_ICON from "../assets/사이드바홈아이콘.png";
import GROUP_ICON from "../assets/사이드바그룹아이콘.png";
import PLUS_ICON from "../assets/그룹추가.png";
import { accessToken } from "../loginInformation";
import api from "../utils/api";
import Modal from "./Modal";
import { GROUP } from "../constants/serverConstant";

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  /* background-color: #d9d9d9; */
  position: absolute;
  font-family: Gmarket Sans;
  /* left: 0;
  top: 0;
  bottom: 0; */
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  background-color: #ffffff;
  /* border-right: 1px solid rgba(0, 0, 0, 0.2); */
`;
const GroupListDiv = styled.div`
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 20px;
  height: 3rem;
  align-items: center;
  &:hover {
    background-color: rgba(54, 73, 249, 0.2);
    cursor: pointer;
    border-right: solid 5px #3649f9;
  }
`;
const GroupListSpan = styled.span`
  color: #34353c;
  font-weight: 600;
`;

const LogoDiv = styled.div`
  margin-top: 5px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 8px;
  height: 3rem;
  align-items: center;
`;
const LogoSpan = styled.span`
  color: #334ba1;
  font-size: 40px;
`;
const UserNameDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 8px;
  height: 3rem;
  align-items: center;
`;
const UserNameSpan = styled.div`
  color: #34353c;
  font-weight: 700;
  font-size: 18px;
`;

const MyPageDiv = styled.div`
  margin-top: 5px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 8px;
  height: 3rem;
  align-items: center;
  border-bottom: 1px;
  margin-bottom: 10px;
  &:hover {
    background-color: rgba(54, 73, 249, 0.2);
    cursor: pointer;
    border-right: solid 5px #3649f9;
  }
`;
const MyPageImg = styled.img.attrs({ src: `${HOME_ICON}` })`
  margin-right: 10px;
`;

const MyPageSpan = styled.span`
  color: #34353c;
  font-weight: 600;
  font-size: 18px;
`;

const GroupDiv = styled.div`
  margin-top: 5px;
  background-color: #ffffff;
  display: flex;
  width: 14rem;
  border-radius: 5px;
  padding-left: 8px;
  height: 3rem;
  align-items: center;
`;

const GroupImg = styled.img.attrs({ src: `${GROUP_ICON}` })`
  margin-right: 10px;
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

const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function handleSetContent(e) {
    setContent(e.target.value);
  }
  async function postGroupName(groupName) {
    // if (groupName.length === 0) {
    //   toast.error("그룹 이름은 3글자 이상이어야 합니다.", {
    //     position: "top-center",
    //   });
    // }
    await api
      .post(GROUP.POST_ADD_GROUP, {
        userId: `${localStorage.getItem("userId")}`,
        groupName: `${groupName}`,
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
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await api
      .get(USERS.GET_GROUP(localStorage.getItem("userId")), {
        // userId 로그인하면 받을 수 있음. -> sessionStorage에서 받아와야할듯
        // sessionStorage에서 받아올 것 1. userId, 2. accessToken
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }) //subjectId
      .then((response) => {
        const results = response.data["result"];
        setGroups(results);
        setLoading(false);
        console.log(results);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function GroupList(group) {
    const groupId = group["groupId"];
    return (
      <div>
        <button
          onClick={() => {
            navigate(`/group/subject/${groupId}`);
          }}
        >
          <GroupListDiv>
            <GroupListSpan>{group["groupName"]}</GroupListSpan>
          </GroupListDiv>
        </button>
      </div>
    );
  }

  return (
    <Container>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <LogoDiv>
            <LogoSpan>놋치지마</LogoSpan>
          </LogoDiv>
          <UserNameDiv>
            <UserNameSpan>
              {localStorage.getItem("nickname")}님의 놋치지마
            </UserNameSpan>
          </UserNameDiv>
          <MyPageDiv>
            <MyPageImg />
            <MyPageSpan>마이페이지</MyPageSpan>
          </MyPageDiv>
          <GroupDiv>
            <GroupImg />
            <MyPageSpan>그룹 목록</MyPageSpan>
          </GroupDiv>
          <button onClick={openModal}>
            <PlusDiv>
              <PlusImg />
              <MyPageSpan>그룹 추가</MyPageSpan>
            </PlusDiv>
          </button>
          <Modal open={modalOpen} close={closeModal} header="그룹 추가">
            <AddDiv>
              <InputTextArea
                onChange={(e) => handleSetContent(e)}
                placeholder="그룹명을 입력해주세요."
              ></InputTextArea>
              <button>
                <AddButton
                  onClick={() => {
                    postGroupName(content);
                  }}
                >
                  추가
                </AddButton>
              </button>
            </AddDiv>
          </Modal>
          {groups.map(function (group) {
            return GroupList(group);
          })}
        </>
      )}
    </Container>
  );
};

export default Sidebar;
