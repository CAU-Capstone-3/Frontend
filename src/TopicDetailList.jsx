import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
export default function TopicDetailList() {
  const { noteId, topicId } = useParams();
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
    <div>
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
            <tr key={data.noteId}>
              <td>{data.noteId}</td>
              <td>{data.ownerName}</td>
              <td>{data.updatedAt}</td>
              <td>
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => navigate(`/note/${data.noteId}`)}
                >
                  이동
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
