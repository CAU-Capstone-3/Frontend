import React from "react";
import styled from "styled-components";
import Imp from "../../assets/분석요청불가버튼.png";
import Pos from "../../assets/분석요청가능버튼.png";
import Del from "../../assets/삭제버튼.png";
//노트분석 component

const Table = styled.table`
  width: 1000px;
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
    font-size: 30px;
    padding: 10px;
    background-color: #ffffff;
    font-weight: bold;
  }
`;
const ImpButton = styled.button`
  width: 62px;
  height: 25px;
  background-image: url(${Imp});
  border: none;
`;
const PosButton = styled.button`
  width: 62px;
  height: 25px;
  background-image: url(${Pos});
  margin-right: 5px;
  border: none;
`;
const DelButton = styled.button`
  width: 62px;
  height: 25px;
  background-image: url(${Del});
  border: none;
`;

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
export default function NoteAnalysisAdmin() {
  return (
    <Container>
      <Table>
        <caption>토픽 관리</caption>
        <thead>
          <tr>
            <th>토픽</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2-3프레이밍</td>
            <td>2022.11.23</td>
            <td>
              <PosButton />
              <DelButton />
            </td>
          </tr>
          <tr>
            <td>2-3프레이밍</td>
            <td>2022.11.23</td>
            <td>
              <PosButton />
              <DelButton />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
