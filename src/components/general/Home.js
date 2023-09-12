import React from "react";
import "../../assets/css/homeStyle.css";
import Logout from "../utills/logout";

export default function Home({ setIsAuth }) {
  return (
    <div className="home">
      <h1>Welcome To Home</h1>
    
      <Logout setIsAuth={setIsAuth} />
    </div>
  );
}
