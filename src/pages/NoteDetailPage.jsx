import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function NoteDetailPage() {
  const { noteId } = useParams();
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
    <div>
      <h3></h3>
    </div>
  );
}
