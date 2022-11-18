import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function SearchHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2 bg-header">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <BiBookBookmark />
        <h1>NoteChiZima</h1>
      </Link>
      <nav className="flex items-center gap-4 font-bold">
        <Link to="topic/subject/1">SubjectTopic</Link>
        <Link to="/newnote">분석노트</Link>
        <Link to="/note/topic/1" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        <button>Logout</button>
      </nav>
    </header>
  );
}
