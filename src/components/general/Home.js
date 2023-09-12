import React from "react";
import "../../assets/css/homeStyle.css";
// import { Link } from "react-router-dom";
import Logout from "../utills/logout";

export default function Home({ setIsAuth }) {
  return (
    <div className="home">
      <h1>Welcome To Home</h1>
      {/* <Link className="btn" to="/login">
        Login
      </Link> */}
      <Logout setIsAuth={setIsAuth} />
    </div>
  );
}
