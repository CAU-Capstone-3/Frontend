import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/serverConstant";
import { Button, TextField } from "@mui/material";
// SignUp 컴포넌트 scss 이용
import "../sign-up/signUp.scss";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers/AuthReducer";

const Div = styled.div`
  font-family: Gmarket Sans;
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
      await axios
        .post(AUTH.POST_LOGIN, {
          email: `${email}`,
          password: `${password}`,
        })
        .then(function (response) {
          console.log(response["data"]);
          // console.log(response);
          // console.log(response["data"]["result"]["accessToken"]);
          // console.log(response["data"]["result"]["userId"]);
          console.log(response["data"]["result"]);
          dispatch(setToken(response["data"]["result"]["accessToken"]));
          localStorage.setItem("userId", response["data"]["result"]["userId"]);
          localStorage.setItem(
            "nickname",
            response["data"]["result"]["nickname"]
          );
          toast.success(<h3>로그인 성공</h3>, {
            position: "top-center",
            autoClose: 2000,
          });
        });

      setTimeout(() => {
        navigate("/main");
      }, 1000);
    } catch (e) {
      console.log(e);
      // 서버에서 받은 에러 메시지 출력
      toast.error(e + "😭", {
        position: "top-center",
      });
    }
  };

  return (
    <Div>
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
            <form onSubmit={handleSubmit}>
              <div className="input-forms">
                <div className="input-forms-item">
                  <div className="input-label" fontFamily="Gmarket Sans">
                    이메일
                  </div>
                  <TextField
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
                  <div className="input-label" fontFamily="Gmarket Sans">
                    비밀번호
                  </div>
                  <TextField
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
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  로그인
                </Button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </Div>
  );
};

export default Login;
