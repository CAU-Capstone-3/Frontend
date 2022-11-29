import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { USERS } from "../constants/serverConstant";
import HOME_ICON from "../assets/사이드바홈아이콘.png";
import GROUP_ICON from "../assets/사이드바그룹아이콘.png";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTc1Mjg1NywiaWF0IjoxNjY5NzQ1NjU3LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.RiodBzuIKuq8Qs0C7voyBHlaQS3Ls70Ym9xFT1KjdqA";
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
    background-color: #f6f6f2;
    cursor: pointer;
    border-right: solid 5px;
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
  font-size: 21px;
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
    background-color: #f6f6f2;
    cursor: pointer;
    border-right: solid 5px;
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

const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(USERS.GET_GROUP(3), {
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
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function GroupList(group) {
    return (
      <div>
        <GroupListDiv>
          <GroupListSpan>{group["groupName"]}</GroupListSpan>
        </GroupListDiv>
      </div>
    );
  }

  return (
    <Container>
      <LogoDiv>
        <LogoSpan>놋치지마</LogoSpan>
      </LogoDiv>

      <UserNameDiv>
        <UserNameSpan>훈딩님의 놋치지마</UserNameSpan>
        {/* 유저 이름 사람마다 다르게 해야함. */}
      </UserNameDiv>

      <MyPageDiv>
        <MyPageImg />
        <MyPageSpan>마이페이지</MyPageSpan>
      </MyPageDiv>

      <GroupDiv>
        <GroupImg />
        <MyPageSpan>그룹 목록</MyPageSpan>
      </GroupDiv>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        groups.map(function (group) {
          return GroupList(group);
        })
      )}
    </Container>
  );
};

export default Sidebar;
