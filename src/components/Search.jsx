import React from "react";
import { useParams } from "react-router-dom";
export default function Search() {
  const { keywordId } = useParams();
  return (
    <div>
      <p>찾은거 : {keywordId ? `${keywordId}` : "🔥"}</p>
    </div>
  );
}
