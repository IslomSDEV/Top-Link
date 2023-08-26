import React from "react";
import "./Statistika.css";
import looper from "../../assets/Images/LooperGroup.svg";
import mail from "../../assets/Images/profile/mail.svg";
import mastercard from "../../assets/Images/profile/MasterCard.svg";
import microsoft from "../../assets/Images/profile/microsoft.svg";
import shutterstock from "../../assets/Images/profile/ShutterStock.svg";
import spotify from "../../assets/Images/profile/Spotify.svg";
import Twitter from "../../assets/Images/profile/Twitter.svg";
import sber from "../../assets/Images/profile/sber.svg";
import { Fade } from "react-reveal";

function Statistika() {
  return (
    <>
      <div className="status">
        <div className="container">
          <div className="status_flex">
            <Fade bottom>
              <div className="status_desc">
                <h2 className="status_title">
                  Har vaqt Toplinkda statistikani qabul qiling
                </h2>
                <p className="status_text">
                  Tomoshabinlar qaysi kontentga ko'proq qiziqish bildirishini
                  bilish uchun profil ko'rinishlari va alohida havola
                  bosishlarini kuzating.
                </p>
              </div>
            </Fade>
            <div className="status_img_box">
              <img className="status_picture" src={looper} alt="looper" />
              <div className="status_pics tw">
                <img src={Twitter} alt="twitter" />
                <span>1,124</span>
              </div>
              <div className="status_pics mk">
                <img src={microsoft} alt="microsoft" />
                <span>899</span>
              </div>
              <div className="status_pics ml">
                <img src={mail} alt="sasa" style={{width: "150px"}} />
                <span>1,227</span>
              </div>
              <div className="status_pics mc">
                <img src={mastercard} alt="mastercard" />
                <span>985</span>
              </div>
              <div className="status_pics rd">
                <img src={shutterstock} alt="rd" />
                <span>680</span>
              </div>
              <div className="status_pics shb">
                <img src={sber} alt="sberbank" />
                <span>703</span>
              </div>
              <div className="status_pics spy">
                <img src={spotify} alt="spotify" />
                <span>1,035</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistika;
