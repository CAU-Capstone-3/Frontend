import React, { useState } from "react";
import styled from "styled-components";
import data3 from "../data3.json";
import { useNavigate } from "react-router-dom";
const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
const Box = styled.div`
  display: flex;
`;
const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;
const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;
const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;
const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
const CWrapper = styled.div`
  border: solid gray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const ResultPage = () => {
  const [commentArray, setCommentArray] = useState([]);

  const [comment, setComment] = useState("");
  const onChange = (event) => setComment(event.target.value);
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    setCommentArray((commentValueList) => [comment, ...commentValueList]);
    setComment("");
  };
  const [dummy] = data3.result;
  return (
    <div>
      <MainTitleText>2-3소캣통신</MainTitleText>
      <Wrapper>
        <Container>
          <Button
            title="뒤로 가기"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </Button>
          <Box>
            <PostContainer>
              <TitleText>{dummy.sentence1.writerName}</TitleText>
              <ContentText>{dummy.sentence1.sentence}</ContentText>
            </PostContainer>
            <PostContainer>
              <TitleText>{dummy.sentence2.writerName}</TitleText>
              <ContentText>{dummy.sentence2.sentence}</ContentText>
            </PostContainer>
          </Box>
        </Container>
      </Wrapper>
      <div className="commentContainer" onSubmit={onSubmit}>
        <form className="commentWrap">
          <input
            type="text"
            placeholder="댓글달기..."
            value={comment}
            onChange={onChange}
          />
          <button className="commetBtn">게시</button>
        </form>
      </div>
    </div>
  );
};

export default ResultPage;
