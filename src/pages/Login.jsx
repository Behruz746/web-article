import React, { useState, useEffect } from "react";
import { ValidationError } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { SammiLogo } from "../constans";
import { Input } from "../ui";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth";
import authService from "../service/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // redux dan functionlar olish uchun
  const { isLoad, loggedIn } = useSelector((state) => state.auth); // reduxdan malumotlar olish uchun
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };

    try {
      const response = await authService.useLogin(user);
      dispatch(signUserSuccess(response.user));
      navigate("/"); // userni home pagega yo'naltirish
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  // agar user login bolgan bolsa login pagelarga kira olmaydi
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="container text-center">
      <main className="form-signin m-auto form__main">
        <form onSubmit={loginHandler}>
          <SammiLogo width={50} height={50} />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <ValidationError />
          <Input
            label={"Email address"}
            elId={"floatingInput"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            elId={"floatingPassword"}
            type={"password"}
            state={password}
            setState={setPassword}
          />
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={isLoad}
          >
            {isLoad ? "Loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
