import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Title from "../components/ui/Title";
import { TOPIC } from "../constants/serverConstant";
import Loading from "../components/Loader";
import NoteAnalysisAdmin from "../components/SubjectAdminComponents/NoteAnalysisAdmin";
import api from "../utils/api";

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
export default function SubjectAdminPage() {
  return (
    <Div>
      <Sidebar />
      <NoteAnalysisAdmin />
    </Div>
  );
}
