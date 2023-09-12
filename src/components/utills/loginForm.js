import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { loginRequest } from "../tools/loginRequest";
import InputForm from "./inputForm";
import LoginHead from "./loginHead";

export default function LoginForm({ setIsAuth, toggle, setToggle }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        autocomplete="off"
        className="sign-in-form"
      >
        <LoginHead
          title="welcome Back"
          text="Not registered yet?"
          toggle={toggle}
          setToggle={setToggle}
          sign="Sign up"
        />

        <div className="actual-form">
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
            value="Sign In"
            className="sign-btn"
            onClick={() => loginRequest(email, password, navigate, setIsAuth)}
          />

          <p className="text">
            Forgotten your password or you login datails?
            <a onClick={(e) => e.preventDefault()} href="#">
              Get help
            </a>{" "}
            sign in
          </p>
        </div>
      </form>
    </>
  );
}
