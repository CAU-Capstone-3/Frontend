import axios from "axios";
import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function WritePage() {
  const [text, setText] = useState();
  const textChangeHandler = (e) => {
    setText(e.target.vaule);
  };
  useEffect(()=>{
    const body={
      "writeId":1,
      "content":setText
    }
    axios.post(`http://18.189.150.89:8080/api/note/`,)
`)
  })
  return (
    <div>
      <form onSubmit={textSubmitHandler}>
        <title></title>
        <textarea value={text} onChange={textChangeHandler} />
        <button type="submit"></button>
      </form>
    </div>
  );
}
