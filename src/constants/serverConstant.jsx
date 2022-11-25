//server 상수 모음
const BASE_URL = "http://18.189.150.89:8080/api";

const ADVICE = Object.freeze({
  POST_COMMEND: (adviceId) => `${BASE_URL}/advice/${adviceId}/comment`, // 댓글 작성
});

const USERS = Object.freeze({
  GET_GROUP: (userId) => `${BASE_URL}/users/${userId}/group`,
});

const GROUP = Object.freeze({
  POST_ADD: `${BASE_URL}/group`, // 그룹 추가
  POST_INVITE: (groupId, userId) =>
    `${BASE_URL}/group/${groupId}/invite/${userId}`,
  GET_SEARCH_MEMBER: (groupId) => `${BASE_URL}/group/${groupId}/members`,
});

const SUBJECT = Object.freeze({
  GET_TOPIC_LIST: (subjectId) => `${BASE_URL}/subject/${subjectId}/topic`,
});

const TOPIC = Object.freeze({
  GET_RESULT: (topicId) => `${BASE_URL}/topic/${topicId}/advice`,
  POST_RESULT: (topicId) => `${BASE_URL}/topic/${topicId}/advice`,
  GET_NOTE_LIST: (topicId) => `${BASE_URL}/topic/${topicId}/note`,
});

const NOTE = Object.freeze({
  POST_WRITE: `${BASE_URL}/note`,
  GET_DETAIL_NOTE: (noteId) => `${BASE_URL}/note/${noteId}`,
});

module.exports = { ADVICE, NOTE, TOPIC, USERS, GROUP, SUBJECT };
