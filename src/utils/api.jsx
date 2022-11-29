import axios from "axios";
import store from "../redux/configStore";
import { jwtUtils } from "./jwtUtils";
import { BASE_URL } from "../constants/serverConstant";

const instance = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://api.eastflag.co.kr'
  baseURL: `${BASE_URL}`,
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTc0NTU0NSwiaWF0IjoxNjY5NzM4MzQ1LCJlbWFpbCI6Im9yaXJvcmk1MTJAbmF2ZXIuY29tIn0.5cmIK31ti-AWWostqzzfk_UErIWrbOnQzfxOpM7QlJY`,
});

/**
 1. 요청 인터셉터
 2개의 콜백 함수를 받습니다.
 */
instance.interceptors.request.use(
  (config) => {
    // HTTP Authorization 요청 헤더에 jwt-token을 넣음
    // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
    const token = store.getState().Auth.token;
    try {
      if (token) {
        config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTY3NzUzMiwiaWF0IjoxNjY5NjcwMzMyLCJlbWFpbCI6ImtoazIxMTExM0BuYXZlci5jb20ifQ.zl0WfaaWJfQ2voP9BlLCuuAHCCRXe2ZH0fvIielaWEE`;
      }
      config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJub3RlY2hpZ2ltYSIsImV4cCI6MTY2OTY3NzUzMiwiaWF0IjoxNjY5NjcwMzMyLCJlbWFpbCI6ImtoazIxMTExM0BuYXZlci5jb20ifQ.zl0WfaaWJfQ2voP9BlLCuuAHCCRXe2ZH0fvIielaWEE`;
      return config;
    } catch (err) {
      console.error("[_axios.interceptors.request] config : " + err);
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

/**
 2. 응답 인터셉터
 2개의 콜백 함수를 받습니다.
 */
instance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다.
        .then() 으로 이어집니다.
    */

    return response;
  },

  (error) => {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.
    */
    return Promise.reject(error);
  }
);

export default instance;
