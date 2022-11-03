import React from "react";
import { Avatar, List } from "antd";

export default function DetailNote() {
  const data = [
    {
      title: "프레이밍 - 개요",
    },
    {
      title: "패킷네트워크상에서는 데이터를 끝없이 보낼 수 있다",
    },
    {
      title: "그러면 왜 프레이밍 하는가?",
    },
    {
      title: "프레이밍(2계층) : 비트들의 연속을 하나의 묶음으로 자르기",
    },
  ];
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>노트 상세 페이지</h2>
      </div>{" "}
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="/note.png" />}
              title={item.title}
              description="부가설명 입니다."
            />
          </List.Item>
        )}
      />
    </div>
  );
}
