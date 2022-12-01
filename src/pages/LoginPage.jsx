import { useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loader";
function LoginPage(props) {
  function joinHandler() {
    try {
      let data = { email: "orirori512@naver.com" };
      axios
        .post("BASE_URL", JSON.stringify(data), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log("res.data.accessToken : " + res.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + res.data;
          props.loginCallBack(true);
          props.history.push("/");
        })
        .catch((ex) => {
          console.log("login requset fail : " + ex);
        })
        .finally(() => {
          console.log("login request end");
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("LoginPage render ... ");
  });
  return (
    <div>
      <span>Login Page</span>

      <button type="button" onClick={joinHandler}>
        Join
      </button>
    </div>
  );
}

export default LoginPage;
