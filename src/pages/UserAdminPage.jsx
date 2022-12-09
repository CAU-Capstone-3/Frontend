import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import UserGroupInvite from "../components/UserAdminComponents/UserGroupInvite";
import EditUserInformation from "../components/UserAdminComponents/EditUserInformation";
import Header from "../components/Header";

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
export default function GroupAdminPage() {
  return (
    <Div>
      <Header />
      <Sidebar />
      <Container>
        <EditUserInformation />
        <UserGroupInvite />
        {/* <WriteNoteList /> */}
      </Container>
    </Div>
  );
}
