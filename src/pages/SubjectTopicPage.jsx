import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
export default function SubjectTopicPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
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
    <div className="w-[1440px] h-[1091px] relative overflow-hidden bg-[#f4f7ff]">
      <div className="w-[1280px] h-[912px] p-10 bg-brand_text m-5 ">
        <Table>
          <thead>
            <tr>
              <td>주차</td>
              <td>title</td>
              <td>업데이트날짜</td>
              <td>노트보러가기</td>
            </tr>
          </thead>
          <tbody>
            {top.map((data) => (
              <tr key={data.topicId}>
                <td>{data.topicId}</td>
                <td>{data.title}</td>
                <td>{data.updatedAt}</td>
                <td>
                  <button
                    onClick={() => navigate(`note/topic/${data.topicId}`)}
                  >
                    이동
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
