import React from "react";
import "./Header.css";
import Logo from "../../assets/Images/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_flex">
            <NavLink to={"/"}>
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="header_navbox">
              <div className="nav_link_box">
                <NavLink to={"/workpage"} className="navigations">
                  U qanday ishlaydi
                </NavLink>
                <NavLink to={"/featurepage"} className="navigations" href="#">
                  Xususiyat
                </NavLink>
              </div>
              <div className="nav_btn_box">
                <NavLink to={"/loginpage"}>
                  <button className="nav_buttons signin">Kirish</button>
                </NavLink>
                <NavLink to={"/sign_up-page"}>
                  <button className="nav_buttons singup">
                    Ro'yxatdan o'tish
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
