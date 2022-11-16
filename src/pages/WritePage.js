import React from "react";
import Editor from "../components/Editor";
import { useParams, useNavigate } from "react-router-dom";
import Responsive from "../components/ui/Reponsive";
import { Button } from "react-bootstrap";

const WritePage = () => {
  return (
    <Responsive>
      <form>
        <Editor />
        <button class="bg-brand hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          저장
        </button>
      </form>
    </Responsive>
  );
};
export default WritePage;
