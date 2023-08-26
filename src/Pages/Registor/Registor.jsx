import React from "react";
import { Link } from "react-router-dom";
import './Registor.css';
import { CiUser } from 'react-icons/ci';
import Flag from '../../assets/Images/flag.png';
import Left from "../../assets/Images/left.svg";
import Right from "../../assets/Images/right.svg";

function SignUp() {
  return (
    <>
      <div className="signup" >
        <div className="innerDiv">
        <img src={Left} className="left posImage" alt="picture" />
        <img src={Right} className="right posImage" alt="picture" />
        <div className="signup_flex">
          <h2 className="signUp_title">Ro‘yxatdan o‘tish</h2>
          <p className="signup_text">
            Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish
            uchun hozir roʻyxatdan oʻting!
          </p>
          <div className="signForm">
            <form className="signUp_form">
              <label className="name_label">
                To'liq ism
                <input type="text" placeholder="Ism va Familya" required />
                <CiUser className="userIconForInput" />
              </label>
              <label className="number_label">
                Telefon nomer
                <input type="number" defaultValue="+998" required placeholder="+998" />
                <img src={Flag} alt="flag" className="uzb_flag_sin" />
              </label>
              <button className="signip_btn">Keyingi</button>
            </form>
            <p className="signup_changeAcc">
              Accountingiz mavjudmi?
              <Link className="EnterLink" to={"/loginpage"}>Kirish</Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
