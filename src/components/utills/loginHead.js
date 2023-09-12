import logo from "../../assets/img/logo.png";

export default function LoginHead({ title, text, toggle, setToggle, sign }) {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="easyclass" />
        <h4>easyclass</h4>
      </div>

      <div className="heading">
        <h2>{title}</h2>
        <h6>{text}</h6>
        <a
          href="#"
          className="toggle"
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
        >
          {sign}
        </a>
      </div>
    </>
  );
}
