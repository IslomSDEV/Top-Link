import React from "react";
// import "../Registor/Registor.css";
import Left from "../../assets/Images/left.svg";
import Right from "../../assets/Images/right.svg";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";

function Login() {
  return (
    <>
      <div className="signup">
        <div className="innerDiv">
          <img src={Left} className="left posImage" alt="picture" />
          <img src={Right} className="right posImage" alt="picture" />
          <div className="signup_flex">
            <h2 className="signUp_title">Kirish</h2>
            <p className="signup_text">
            Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!
            </p>
            <div className="signForm">
              <form className="signUp_form">
                <label className="name_label">
                Elektron pochta
                  <input type="text" placeholder="email@gmail.com" required />
                  <MdOutlineAlternateEmail className="userIconForInput" />
                </label>
                <label className="number_label">
                  Parol
                  <input type="password" placeholder="****************" required />
                  <MdOutlineLock className="lock_sin" />
                </label>

              <Link style={{fontSize: "14px", display: "flex", marginBottom:"20px" }}>Parolingizni unutdingizmi?</Link>

                <button className="signip_btn">Kirish</button>
              </form>
              <p className="signup_changeAcc">
                Accountingiz mavjud emasmi?
                <Link className="EnterLink" to={"/sign_up-page"}>
                  Ro'yxatdan o'ting
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
