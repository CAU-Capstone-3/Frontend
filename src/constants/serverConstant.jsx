//server 상수 모음
const BASE_URL = "http://18.189.150.89:8080/api";

const ADVICE = Object.freeze({
  POST_COMMEND: (adviceId) => `${BASE_URL}/advices/${adviceId}/comments`, // 댓글 작성 ... 리퀘스트 할때 userId 보내야함.
});
const INVITE = Object.freeze({
  POST_INVITE: `${BASE_URL}/invites`,
  POST_ACCEPT: `${BASE_URL}/invites/accepts`,
});

const USERS = Object.freeze({
  GET_INVITE_GROUP: (userId) => `${BASE_URL}/users/${userId}/invites`, // 초대된 그룹 목록
  GET_GROUP: (userId) => `${BASE_URL}/users/${userId}/groups`,
});

const GROUP = Object.freeze({
  POST_ADD_GROUP: `${BASE_URL}/groups`, // 그룹 추가
  GET_GROUP_SUBJECTS: (groupId) => `${BASE_URL}/groups/${groupId}/subjects`, // 그룹에 속한 전체 과목 목록 조회
  GET_GROUP_MEMBERS: (groupId) => `${BASE_URL}/groups/${groupId}/members`, // 그룹에 속한 멤버 목록 조회
});

const SUBJECT = Object.freeze({
  POST_CREATE_SUBJECT: `${BASE_URL}/subjects`,
  GET_TOPIC_LIST: (subjectId) => `${BASE_URL}/subjects/${subjectId}/topics`, // 해당 과목 내의 모든 토픽 목록을 조회
});

const TOPIC = Object.freeze({
  GET_RESULT: (topicId) => `${BASE_URL}/topics/${topicId}/advices`, // 토픽별 분석결과 목록을 조회
  POST_RESULT: (topicId) => `${BASE_URL}/topics/${topicId}/advices`, // 해당 토픽에 대한 분석 시작을 요청 ... 그냥 요청만 하면 됨 topicId 껴서 어차피 post하니까
  // GET_NOTE_LIST: (topicId) => `${BASE_URL}/topics/${topicId}/notes`, // 해당 토픽 내에서 작성된 노트의 목록 조회
  GET_NOTE_LIST: (topicId) => `${BASE_URL}/topics/${topicId}/notes`, // 해당 토픽 내에서 작성된 노트의 목록 조회
});

const NOTE = Object.freeze({
  POST_WRITE: `${BASE_URL}/notes`, // 노트 작성할때 topicId랑 userId, content 보내야함.
  GET_DETAIL_NOTE: (noteId) => `${BASE_URL}/notes/${noteId}`,
});
const AUTH = Object.freeze({
  POST_LOGIN: `${BASE_URL}/auth/login`,
});

module.exports = {
  AUTH,
  BASE_URL,
  ADVICE,
  INVITE,
  NOTE,
  TOPIC,
  USERS,
  GROUP,
  SUBJECT,
};
