import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AnalResultPage() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [top, setTop] = useState([""]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(`http://18.189.150.89:8080/api/advice/${topicId}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data["result"];
        console.log(data);
        setTop(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return <div></div>;
}
