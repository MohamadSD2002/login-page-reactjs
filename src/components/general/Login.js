import { useState } from "react";
import LoginForm from "../utills/loginForm";
import SignUpForm from "../utills/signUpForm";
import Carousel from "../utills/carousel";
import "../../assets/css/loginStyle.css";

export default function Login({ setIsAuth }) {
  const [toggle, setToggle] = useState(false);
  return (
    <main className={toggle && "sign-up-mode"}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <LoginForm
              setIsAuth={setIsAuth}
              toggle={toggle}
              setToggle={setToggle}
            />

            <SignUpForm
              setIsAuth={setIsAuth}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>

          <Carousel />
        </div>
      </div>
    </main>
  );
}
