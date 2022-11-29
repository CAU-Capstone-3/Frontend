import React from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";
const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuLink title="Home" icon={"home"} />
      <MenuLink title="Subjects" icon={"file-multiple"} />
      <MenuLink title="MyNote" icon={"gift"} active />
      <MenuLink title="Topics" icon={"bank"} />
      <MenuLink title="Settings" icon={"cog"} />
    </Container>
  );
};

export default Menu;
