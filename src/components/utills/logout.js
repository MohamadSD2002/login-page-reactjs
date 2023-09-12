import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/homeStyle.css";

export default function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          localStorage.clear();
          setIsAuth(false);
          navigate("/login");
        }}
      >
        logout
      </button>
    </>
  );
}
