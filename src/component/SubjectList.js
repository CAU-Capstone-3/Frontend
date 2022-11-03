import React from "react";
import dummy from "./data5.json";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SubjectList() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>과목별 리스트</h3>
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>목차</th>
            <th>업데이트날짜</th>
            <th>이동</th>
          </tr>
        </thead>
        <tbody>
          {dummy.result.map((section) => (
            <tr key={section.sectionId}>
              <td>{section.title}</td>
              <td>{section.updatedAt}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/note/section/${section.sectionId}`);
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
