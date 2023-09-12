import request from "./request";

export function loginRequest(email, password, navigate, setIsAuth) {
  request({
    method: "post",
    url: "https://reqres.in/api/login",
    data: { email, password },
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
        setIsAuth(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
