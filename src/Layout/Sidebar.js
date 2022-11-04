import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  FolderOpenOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Home", "sub1", <HomeOutlined />, [
    getItem(
      "김형기",
      "g1",
      null,
      [getItem("대시보드", "1"), getItem("프로필", "2")],
      "group"
    ),
    getItem(
      "학습관리",
      "g2",
      null,
      [getItem("내학습", "3"), getItem("작성한게시글", "4")],
      "group"
    ),
  ]),
  getItem("스터디그룹관리", "sub2", <FolderOpenOutlined />, [
    getItem("컴퓨터통신", "5"),
    getItem("데이터베이스설계", "6"),
    getItem("그룹 만들기", "sub3", null, [
      getItem("그룹별 모집상황", "7"),
      getItem("마감된 그룹", "8"),
    ]),
  ]),
  getItem("설정", "sub4", <SettingOutlined />, [
    getItem("계정정보", "9"),
    getItem("그룹정보", "10"),
  ]),
];
const Sidebar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 200,
      }}
      defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;
