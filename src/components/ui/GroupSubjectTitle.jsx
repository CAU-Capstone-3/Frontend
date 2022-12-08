// 모든 페이지 타이틀 통합.
import React from "react";
import styled from "styled-components";
import GROUP_MANAGE_BUTTON from "../../assets/그룹관리.png";
const TitleDiv = styled.div`
  display: flex;
  width: 100rem;
  margin-left: 16rem;
  position: relative;
  padding: 0rem 2rem;
  justify-content: space-between;
  align-items: center;
  /* height: 48px;
  width: 320px; */
  margin-top: 20px;
`;
const TitleResult = styled.div`
  flex-direction: row;
  text-align: left;
  vertical-align: top;
  margin-top: 40px;
  font-size: 36px;
  font-family: Gmarket Sans;
  font-weight: 700;
  letter-spacing: -1%;
  line-height: auto;
  color: #000000;
`;
const TitleTopicDiv = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 16px;
  gap: 10px;
`;
const TitleTopicText = styled.div`
  text-align: center;
  /* vertical-align: top; */
  font-size: 18px;
  font-family: Gmarket Sans;
  line-height: 22%;
  color: #263cff;
  font-weight: 900;
`;
const GroupManageImg = styled.img.attrs({ src: `${GROUP_MANAGE_BUTTON}` })`
  margin-top: 40px;
`;
const GroupMangeButton = styled.button.attrs({
  type: `submit`,
})``;
const Title = (titleName, groupId) => {
  function onClick() {
    window.location.href = `/group/admin/${groupId}`;
  }
  return (
    <div>
      <TitleDiv>
        <TitleResult>{titleName}</TitleResult>
        <GroupMangeButton onClick={onClick}>
          <GroupManageImg />
        </GroupMangeButton>
        <TitleTopicDiv></TitleTopicDiv>
      </TitleDiv>
    </div>
  );
};

export default Title;
