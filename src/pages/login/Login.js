import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/serverConstant";
// SignUp 컴포넌트 scss 이용

import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers/AuthReducer";
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  flex-direction: column;
  margin-left: 16rem;
  padding: 0 4rem;
  margin-top: 20px;
  /* 이 아래는 삭제 해야함. */
  padding: 20px 0px;
`;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    password: Yup.string().required("패스워드를 입력하세요!"),
  });
  const submit = async (values) => {
    const { email, password } = values;
    try {
      const { data } = await axios
        .post(AUTH.POST_LOGIN, {
          email: `${email}`,
          password: `${password}`,
        })
        .then(function (response) {
          console.log(response);
        });

      dispatch(setToken(data.jwt));
      toast.success(<h3>로그인 성공</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "😭", {
        position: "top-center",
      });
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ values, handleSubmit, handleChange }) => (
          <div className="signup-wrapper">
            <ToastContainer />
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="input-forms">
                <div className="input-forms-item">
                  <div className="input-label">이메일</div>
                  <textarea
                    value={values.email}
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <div className="error-message">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="input-forms-item">
                  <div className="input-label">비밀번호</div>
                  <textarea
                    value={values.password}
                    name="password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                  />
                  <div className="error-message">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
