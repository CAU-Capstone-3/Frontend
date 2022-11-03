import React from "react";
import dummy from "./data2.json";
import { Table } from "react-bootstrap";
export default function Note() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>목차</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}
