import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SammiLogo } from "../constans";
import { Input } from "../ui";
import { loginUserStart } from "../slice/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // redux dan functionlar olish uchun
  const { isLoad } = useSelector((state) => state.auth); // reduxdan malumotlar olish uchun

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="container text-center">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={loginHandler}>
          <SammiLogo width={50} height={50} />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
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
