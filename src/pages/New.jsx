import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function New() {
  const { Topic, setTopic } = useState();
  const { topicId } = useParams();
  const url = `http://18.189.150.89:8080/api/note/topic/${topicId}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setTopic(response.data);
      console.log(response.data);
    });
  });
  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <div>
          <p className="text-3xl font-bold">{Topic.name}이름</p>
          <p>{Topic.name}</p>
        </div>
      </div>
    </div>
  );
}
