import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { INVITE } from "../../constants/serverConstant";
import api from "../../utils/api";
//그룹초대, 새로초대할 멤버

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  font-family: Gmarket Sans;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */

  padding: 20px 0px;
`;
//그룹초대단어 박스
const Box = styled.div`
  .label {
    font-size: 16px;
    margin-top: 20px;
    margin-left: 20px;
    padding-bottom: 2rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 2px;
    border-bottom: 1px solid #cfcfcf;
  }

  display: block;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  padding-bottom: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  width: 571px;
  height: 336px;
`;

//박스위 파란모양지붕
const BlueBox = styled.div`
  width: 569px;
  height: 13px;
  background-color: #263cff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

//초대할 사용자 아이디
const Label = styled.p`
  margin-top: 20px;
  text-align: left;
  margin-left: 20px;
  color: #8992a9;
  line-height: 14px;
  font-weight: bold;
  font-size: 14px;
`;
//input 박스
const StyledInput = styled.input`
  width: 505px;
  height: 48px;
  box-sizing: border-box;
  margin: 0.8rem 0;
  background: #f5f5f5;
  border: 1px solid rgba(137, 146, 169, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-left: 20px;
`;
const Button = styled.button`
  background: #263cff;
  border-radius: 16px;
  border: none;
  color: white;
  font-weight: bold;
  width: 129px;
  height: 48px;
  margin-top: 20px;
  margin-left: 20px;
`;
export default function GroupInvite() {
  const { groupId } = useParams();
  const [content, setContent] = useState("");

  async function postInvite() {
    await api
      .post(INVITE.POST_INVITE, {
        groupId: `${groupId}`,
        email: `${content}`,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleSetContent = (e) => {
    // onChange함수.
    setContent(e.target.value);
  };
  return (
    <Container>
      <Box>
        <BlueBox />
        <div className="label">그룹초대</div>
        <Label>초대할 사용자 아이디</Label>
        <StyledInput
          type="input"
          placeholder="example@naver.com"
          onChange={(e) => handleSetContent(e)}
        />
        <Button onClick={postInvite}>초대하기</Button>
      </Box>
    </Container>
  );
}
