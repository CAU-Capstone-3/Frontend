import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { GROUP } from "../../constants/serverConstant";
const Container = styled.div`
  p {
    margin-left: 10px;
    margin: 0;
    font-weight: bold;
    text-align: left;
    letter-spacing: 2px;
    padding-bottom: 2rem;
    margin-left: 10px;
    margin-top: 10px;
  }

  display: flex;
  width: auto;
  flex-direction: column;
  margin: 15px;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  border-style: solid;

  padding: 20px 0px;
`;
const BlueBox = styled.div`
  width: 531px;
  height: 11px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const NameList = styled.div`
  margin-bottom: 10px;
  .name {
    font-weight: bold;
    margin-left: 15px;
    text-align: left;
    border-bottom: 1px solid #9e9e9e;
  }
`;
export default function ResponseBox() {
  const { groupId } = useParams();
  const [Team, SetTeam] = useState([""]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await api
      .get(GROUP.GET_INVITE_MEMBERS(groupId))
      .then((res) => {
        console.log("이거", res.data["result"]);
        SetTeam(res.data["result"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function InviteList(person) {
    return (
      <NameList>
        <div className="name">{person}</div>
      </NameList>
    );
  }
  return (
    <Container>
      <BlueBox />
      <p>응답대기중</p>

      {Team.map((person) => {
        console.log(person);
        return InviteList(person["nickname"]);
      })}
    </Container>
  );
}
