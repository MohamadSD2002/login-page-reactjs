import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { loginRequest } from "../tools/loginRequest";
import { useNavigate } from "react-router-dom/dist";
import InputForm from "./inputForm";
import LoginHead from "./loginHead";

export default function SignUpForm({ setIsAuth, toggle, setToggle }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("janet.weaver@reqres.in");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        autocomplete="off"
        className="sign-up-form"
      >
        <LoginHead
          title="Get Started"
          text="Already have an account?"
          toggle={toggle}
          setToggle={setToggle}
          sign="Sign in"
        />

        <div className="actual-form">
          <div className="input-wrap">
            <InputForm
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
            />
          </div>

          <div className="input-wrap">
            <InputForm
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
          </div>

          <div className="input-wrap">
            <InputForm
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="sign-btn"
            onClick={() => loginRequest(email, password, navigate, setIsAuth)}
          />

          <p className="text">
            By signing up, I agree to the
            <a onClick={(e) => e.preventDefault()} href="#">
              Terms of Services
            </a>{" "}
            and
            <a onClick={(e) => e.preventDefault()} href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
