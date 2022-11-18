import axios from "axios";
import React, { useState, useEffect } from "react";

export default function WritePage() {
  const [text, setText] = useState();
  const textChangeHandler = (e) => {
    setText(e.target.vaule);
  };
  const textSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div class="flex p-5 m-3">
        <form onSubmit={textSubmitHandler}>
          <title></title>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={textChangeHandler}
          />
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
}
