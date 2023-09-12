import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./components/general/Login";
import Home from "./components/general/Home";
import "./assets/css/general.css";

function App() {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));

  return (
    <div className="App">
      {isAuth ? (
        <>
          {pathname === "/login" && <Navigate to="/" />}
          <Routes>
            <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
          </Routes>
        </>
      ) : (
        <>
          {pathname !== "/login" && <Navigate to="/login" />}
          <Routes>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
