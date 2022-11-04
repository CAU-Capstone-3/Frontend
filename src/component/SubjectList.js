import React, { useEffect, useState } from "react";
import dummy from "../db/data5.json";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function SubjectList() {
  const [section, setSection] = useState([]);
  const { subjectId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8080/api/section/subject/${subjectId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSection(data);
      });
  }, [subjectId]);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>과목별 섹션리스트</h2>
      </div>
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
          {section.map((data) => (
            <tr key={data.sectionId}>
              <td>{data.title}</td>
              <td>{data.updatedAt}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/note/section/${data.subjectId}`);
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
