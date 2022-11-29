import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Profile from "./Menu/Profile";

const Container = styled.div`
  background-color: #d9d9d9;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  /* border-right: 1px solid rgba(0, 0, 0, 0.2); */
`;

const Sidebar = () => {
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Group", path: "/" },
  ];

  return <Container></Container>;
};

export default Sidebar;
