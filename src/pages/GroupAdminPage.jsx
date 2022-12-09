import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import GroupInvite from "../components/GroupAdminComponents/GroupInvite";
import GroupMember from "../components/GroupAdminComponents/GroupMember";
import ResponseBox from "../components/GroupAdminComponents/ResponseBox";
import SubjectListEdit from "../components/GroupAdminComponents/SubjectListEdit";
import GroupInform from "../components/GroupAdminComponents/GroupInform";
import Header from "../components/Header";

const Div = styled.div`
  /* background-color: #f6f6f6; */
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function GroupAdminPage() {
  return (
    <Div>
      <Header />
      <Sidebar />
      <GroupInform />
      <SubjectListEdit />
      <GroupMember />
      <RowDiv>
        <GroupInvite />
        <ResponseBox />
      </RowDiv>
    </Div>
  );
}
