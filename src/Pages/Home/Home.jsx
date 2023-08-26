import React from "react";
import "./Home.css";
// import HomePic from "../../assets/Images/HomePic.svg";
import telegram from "../../assets/Images/tg.svg";
import shazam from "../../assets/Images/Shazam.svg";
import safari from "../../assets/Images/Safari.svg";
import amazon from "../../assets/Images/Amazon.svg";
import paypall from "../../assets/Images/PayPal.svg";
import snapchat from "../../assets/Images/Snapchat.svg";
import steam from "../../assets/Images/Steam.svg";
import facebook from "../../assets/Images/Facebook.svg";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home_flex">
            <Fade bottom>
              <div className="home_left">
                <h1 className="home_title">Endi sizga faqat Toplink kerak</h1>
                <p className="home_text">
                  Bir marta bosish orqali izdoshlaringiz bilan ko'proq baham
                  ko'ring. Toplink barcha kontentingizga bir joyda ulanishni
                  osonlashtiradi.
                </p>
                <Link to={"/sign_up-page"}>
                  <button className="home_button">
                    Toplink-dan bepul foydalaning
                  </button>
                </Link>
                <span className="home_mini_text">
                  Bu haftada 5318 kishi ro'yxatdan o'tgan!
                </span>
              </div>
            </Fade>
            <div className="home_right">
              <Fade bottom>
                <div className="home_imagebox">
                  <img
                    className="home_main_pic"
                    src="https://www.toplink.uz/static/media/1HeaderImg.ca7e34a6457aa0096657.png"
                    alt="image"
                  />
                </div>
              </Fade>
              <img
                className="home_social_pic tg"
                src={telegram}
                alt="telegram"
              />
              <img className="home_social_pic shz" src={shazam} alt="shazam" />
              <img className="home_social_pic sf" src={safari} alt="safari" />
              <img className="home_social_pic az" src={amazon} alt="amazon" />
              <img className="home_social_pic pl" src={paypall} alt="paypall" />
              <img
                className="home_social_pic sp"
                src={snapchat}
                alt="snapchat"
              />
              <img className="home_social_pic st" src={steam} alt="steam" />
              <img
                className="home_social_pic fb"
                src={facebook}
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
