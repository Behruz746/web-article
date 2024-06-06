import React, { useState } from "react";
import { Input } from "../ui";
import { SammiLogo } from "../constans";
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/auth";
import authService from "../service/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoad } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart()); // loading...
    // user data
    const user = {
      username: name,
      email,
      password,
    };

    try {
      const response = await authService.useRegister(user);
      // console.log(response);
      // console.log(user);
      // console.log(response.data.user.token);
      dispatch(signUserSuccess(response.user)); // register
    } catch (error) {
      // console.log(error.response.data.errors);
      dispatch(signUserFailure(error.response.data.errors)); // error
    }
  };

  return (
    <div className="container text-center">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={registerHandler}>
          <SammiLogo width={50} height={50} />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Input
            label={"User name"}
            elId={"floatingName"}
            state={name}
            setState={setName}
          />
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
            {isLoad ? "Loading..." : " Register"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
