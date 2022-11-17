import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
export default function TopicNotePage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [top, setTop] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/note/topic/${topicId}`)
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
        <div className="w-[770px] h-[151px]">
          <p className="w-[569px] absolute left-[436px] top-[152px] text-[40px] font-bold text-center capitalize text-[#212b36]">
            TopicList
          </p>
          <p className="absolute left-[648px] top-[120px] text-lg font-semibold text-center text-[#3056d3]">
            토픽별노트목록조회
          </p>
        </div>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <td>목차</td>
              <td>이름</td>
              <td>업데이트날짜</td>
            </tr>
          </thead>
          <tbody>
            {top.map((data) => (
              <tr key={data.noteId}>
                <td>{data.noteId}</td>
                <td>{data.ownerName}</td>
                <td>{data.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
