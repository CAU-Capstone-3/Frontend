import React from "react";
import styled from "styled-components";
import CANTANALYSIS from "../../assets/분석요청불가버튼.png";
import ANALYSIS from "../../assets/분석요청가능버튼.png";
import DELETE from "../../assets/삭제버튼.png";
import { TOPIC } from "../../constants/serverConstant";
import api from "../../utils/api";

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
const AnalysisButton = styled.button`
  width: 62px;
  height: 25px;
  margin-right: 5px;
  background-image: url(${ANALYSIS});
  border: none;
`;
const CantAnalysisButton = styled.div`
  width: 62px;
  height: 25px;
  margin-bottom: 5px;
  background-image: url(${CANTANALYSIS});
  margin-right: 5px;
  border: none;
`;
const DeleteButton = styled.div`
  width: 62px;
  height: 25px;
  background-image: url(${DELETE});
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

export default function NoteAnalysisAdmin(reesults) {
  async function postResult(topicId) {
    //topicId, userId
    // POST 요청은 body에 실어 보냄
    await api
      .post(TOPIC.POST_RESULT(topicId))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function TopicList(topicId, title, status, time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    time = `${year}.${month}.${day}`;
    function onClick() {
      postResult(topicId);
      // window.location.reload();
    }
    if (status === "READY") status = <AnalysisButton onClick={onClick} />;
    else status = <CantAnalysisButton />;

    return (
      <tr>
        <td>{title}</td>
        <td>{time}</td>
        <td>
          {status}
          <DeleteButton />
        </td>
      </tr>
    );
  }

  return (
    <>
      <Table>
        <caption>토픽 관리</caption>

        <thead>
          <tr>
            <th>토픽</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {reesults.map(function (result) {
            return TopicList(
              result["topicId"],
              result["title"],
              result["analyzed"],
              result["updatedAt"]
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
