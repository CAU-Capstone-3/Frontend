import React from "react";
import dummy from "./data3.json";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function SubjectSection() {
  const navigate = useNavigate();
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>업데이트날짜</th>
            <th>이동</th>
          </tr>
        </thead>
        <tbody>
          {dummy.result.map((data3) => (
            <tr key={data3.ownerId}>
              <td>{data3.ownerId}</td>
              <td>{data3.ownerName}</td>
              <td>{data3.updatedAt}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/note/${data3.noteId}`);
                  }}
                >
                  이동
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
