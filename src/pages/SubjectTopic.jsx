import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
export default function SubjectTopic() {
  const navigate = useNavigate();
  const { subjectId, topicId } = useParams();
  const [top, setTop] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/topic/subject/${subjectId}`)
      .then((response) => {
        const data = response.data["result"];
        console.log(data);
        setTop(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="w-[770px] h-[151px]">
        <p className="w-[569px] absolute left-[436px] top-[152px] text-[40px] font-bold text-center capitalize text-[#212b36]">
          Topic
        </p>
        <p className="absolute left-[648px] top-[120px] text-lg font-semibold text-center text-[#3056d3]">
          컴퓨터 통신 주간토픽
        </p>
      </div>
      <br />
      <br />

      <Table>
        <thead>
          <tr>
            <td>주차</td>
            <td>title</td>
            <td>업데이트날짜</td>
            <td>이동</td>
          </tr>
        </thead>
        <tbody>
          {top.map((data) => (
            <tr key={data.topicId}>
              <td>{data.topicId}</td>
              <td>{data.title}</td>
              <td>{data.updatedAt}</td>
              <td>
                <button onClick={() => navigate("/note/topic/1")}>이동</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
