import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AnalsisResult() {
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
  return (
    <div>
      <div>
        <div className="w-[770px] h-[151px]">
          <p className="w-[569px] absolute left-[436px] top-[152px] text-[40px] font-bold text-center capitalize text-[#212b36]">
            Topic
          </p>
          <p className="absolute left-[648px] top-[120px] text-lg font-semibold text-center text-[#3056d3]"></p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
