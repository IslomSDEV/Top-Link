import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_flex">
            <h2 className="footer_title">
              Bugunoq Toplink jamoasiga qo'shiling
            </h2>
            <p className="footer_text">
              O'z izdoshlariga o'zlarining barcha mazmunini kashf qilishda
              yordam berish uchun Toplink-dan foydalanadigan minglab
              foydalanuvchilarga qo'shiling.
            </p>
            <Link to={"/sign_up-page"}>
              <button className="footer_button">
                Toplink-dan bepul foydalaning
              </button>
            </Link>
            <span className="footer_mini_text">
              Bu haftada 5318 kishi ro'yxatdan o'tgan!
            </span>
            <div className="footer_nav">
              <NavLink to={"/workpage"} className="footer_nav_link" href="#">
                U qanday ishlaydi
              </NavLink>
              <NavLink to={"/featurepage"} className="footer_nav_link" href="#">
                Xususiyat
              </NavLink>
              <NavLink to={"/faq"} className="footer_nav_link" href="#">
                FAQ
              </NavLink>
              <NavLink
                to={"/teamofservice"}
                className="footer_nav_link"
                href="#"
              >
                Xizmat ko'rsatish shartlari
              </NavLink>
              <NavLink
                to={"/privespolicy"}
                className="footer_nav_link"
                href="#"
              >
                Maxfiylik siyosati
              </NavLink>
            </div>
            <span className="footer_copyright">
              Copyright © 2022 Toplink All rights reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
