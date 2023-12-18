import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../register/page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faEyeSlash, faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "../nav/Nav";
import { confirmAlert } from "react-confirm-alert";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../customUi.css'
import { login } from "../../toolkit/reducers/ReducerUsers";
function Login() {
  const { t, i18n } = useTranslation("login");
  function change(option) {
    i18n.changeLanguage(option.target.value);
  }

  const submit2 = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="popup-overlay position-absolute start-50 top-50" style={{transform:"translate(-50%,-50%"}}>
            <h5 className="poptitle text-dark ">Incorrect Password</h5>
            <button onClick={onClose} className="popclose">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button
              className="nav-link  p-0 text-light"
              onClick={() => {
                onClose();
                handlelogin();
              }}
            >
              Try again
            </button>
          </div>
        );
      },
    });
  };
  const navigate = useNavigate();
  function handlelogin() {
    navigate("/login");
  }
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(users);
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password);
    if (foundUser) {
      dispatch(login(foundUser.id))
      console.log(foundUser);
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } else {
      submit2();
    }
  };

  return (
    <>
      <Nav />

      <div className="p-5 text-center">
        <h2 className="h2-login mb-3" style={{ color: "cornflowerblue" }}>
          {t("Login")}
        </h2>
      </div>
      <div className="container mt-5" style={{ maxWidth: "550px" }}>
        <form className="form-contact w-100 mx-auto">
          <div className="form-group">
            <label htmlFor="email">{t("EmailAddress")}s</label>
            <input
              type="email"
              className="input form-control"
              onChange={(e) => {
                 setEmail(e.target.value);
                }}
              id="email"
              aria-describedby="emailHelp"
            />
            <small className="text-secondary">
              {t("DoNotHaveAccount")}
              <Link to={"/register"}>{t("SignUp")}</Link>
            </small>
          </div>
          <div className="form-group position-relative">
            <label htmlFor="password">{t("Password")}</label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
               }}
              className="input form-control  "
              id="password"
            />
            <span className=" position-absolute "
            style={{zIndex:"2121",top:"40px",right:"30px"}}
             onClick={togglePassword}>
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className="eye-icon position-absolute"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="eye-icon eye-slash position-absolute"
                />
              )}
            </span>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              {t("RememberMe")}
            </label>
          </div>
          <button
            type="submit"
            className="w-50 d-block  rounded-pill  mx-auto  btn btn-primary"
            id="submit"
            onClick={handleSubmit}
          >
            {t("Submit")}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
