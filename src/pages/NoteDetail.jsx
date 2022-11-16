import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function NoteDetail() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [top, setTop] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/note/${noteId}`)
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
    <Table>
      <thead>
        <tr>
          <td>#</td>
          <td>이름</td>
          <td>업데이트날짜</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {top.map((data) => (
          <tr key={data.noteId}>
            <td>{data.noteId}</td>
            <td>{data.ownerName}</td>
            <td>{data.updatedAt}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
