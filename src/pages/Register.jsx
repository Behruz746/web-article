import React, { useState } from "react";
import { Input } from "../ui";
import { SammiLogo } from "../constans";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container text-center">
      <main className="form-signin w-25 m-auto">
        <form>
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
          <button className="btn btn-primary w-100 py-2" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
