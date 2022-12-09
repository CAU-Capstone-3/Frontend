import React from "react";
import styled from "styled-components";
//작성한 노트목록 컴포넌트

const Table = styled.table`
  caption-side: top;
  width: 572px;
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
    padding: 10px;
    background-color: #ffffff;
    font-weight: bold;
  }
`;
export default function WriteNoteList() {
  return (
    <Table>
      <thead>
        <tr>
          <th>토픽</th>
          <th>과목</th>
          <th>그룹</th>
        </tr>
      </thead>
      <tbody>
        <td>2-3패킷 스위칭</td>
        <td>컴퓨터 통신</td>
        <td>중앙대 멋쟁이사자</td>
      </tbody>
    </Table>
  );
}
