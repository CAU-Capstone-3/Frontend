import { useState, useEffet } from "react";
export default function WrirePages() {
  const [text, setText] = useState();

  return (
    <div>
      <div class="flex p-5 m-3">
        <form>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
          />
        </form>
      </div>
    </div>
  );
}
