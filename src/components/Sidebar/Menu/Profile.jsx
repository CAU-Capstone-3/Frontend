import React from "react";
import Image from "../../../assets/Profile.png";
import styled from "styled-components";
const Container = styled.div`
  margin-top: 5rem;
`;

const ProfileImg = styled.img`
  height: 4rem;
`;
const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>김 형 기</ProfileName>
    </Container>
  );
};

export default Profile;
