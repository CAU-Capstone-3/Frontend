import React from "react";
import styled from "styled-components";
import AgrBtn from "../img/수락버튼.png";
import RejBtn from "../img/거절버튼.png";
const AgrButton = styled.img`
  width: 62px;
  height: 25px;
`;
const RejButton = styled.img`
  width: 62px;
  height: 25px;
`;
const Container = styled.div`
  font-family: Gmarket Sans;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  color: #4f546c;
  font-size: 0.9rem;
  background-color: #f9fbff;
`;
const Table = styled.table`
caption-side: top;

  border: none;
  border-collapse: collapse;
  box-shadow: 0 5px 10px #f9fbff;
  background-color: white;
  td,
  th {
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem
    font-weight: 900;
  }
  thead{
    box-shadow: 0 5px 10px #e1e5ee;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 1rem 2rem;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  box-shadow: 0 5px 10px #e1e5ee;
  caption {
    text-align:center;
    border-bottom: 2px solid #3B72FF; 
    font-size: 0.9em;
    padding: 10px; 
  }
`;
export default function NewTable() {
  return (
    <Container>
      <Table>
        <caption>그룹초대목록</caption>
        <thead>
          <tr>
            <th>그룹</th>
            <th>그룹장</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>중앙대멋쟁이사자</td>
            <td>김형기</td>
            <td>
              {" "}
              <AgrButton src={AgrBtn} />
              <RejButton src={RejBtn} />
            </td>
          </tr>
          <tr>
            <td>중앙대멋쟁이사자</td>
            <td>김형기</td>
            <td>
              {" "}
              <AgrButton src={AgrBtn} />
              <RejButton src={RejBtn} />
            </td>
          </tr>{" "}
          <tr>
            <td>중앙대멋쟁이사자</td>
            <td>김형기</td>
            <td>
              {" "}
              <AgrButton src={AgrBtn} />
              <RejButton src={RejBtn} />
            </td>
          </tr>{" "}
          <tr>
            <td>중앙대멋쟁이사자</td>
            <td>김형기</td>
            <td>
              {" "}
              <AgrButton src={AgrBtn} />
              <RejButton src={RejBtn} />
            </td>
          </tr>{" "}
          <tr>
            <td>중앙대멋쟁이사자</td>
            <td>김형기</td>
            <td>
              {" "}
              <AgrButton src={AgrBtn} />
              <RejButton src={RejBtn} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
