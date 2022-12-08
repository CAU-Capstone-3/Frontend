import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
//그룹에 속한 멤버 목록 조회
const Table = styled.table`
  caption-side: top;
  width: 1100px;
  border: none;
  border-collapse: collapse;
  box-shadow: 0 5px 10px #f9fbff;
  background-color: white;
  td,
  th {
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 900;
    display: table-cell;
  }
  thead {
    box-shadow: 0 5px 10px #e1e5ee;
  }
  /* td,
  th {
    border: 1px 
  } */
  td {
    padding: 1rem 2rem;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
  }
  box-shadow: 0 5px 10px #e1e5ee;
  caption {
    text-align: center;
    border-bottom: 2px solid #3b72ff;
    font-size: 1rem;
    color: black;
    padding: 10px;
    background-color: #ffffff;
    font-weight: bold;
  }
`;
export default function GroupMember() {
  const { groupId } = useParams();
  const [Team, SetTeam] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/groups/${groupId}/members`)
      .then((res) => {
        SetTeam(res.data["result"]);
        console.log(Team);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Table>
      <caption>팀원조회</caption>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {Team.map((data) => (
          <tr key={data.userId}>
            <td>{data.nickname}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
