import React from "react";
import "./Use.css";
import { ImLink } from "react-icons/im";
import teamSocial from "../../assets/Images/teamSocial.svg";
import { Fade } from "react-reveal";

function Use() {
  return (
    <>
      <div className="use">
        <div className="container">
          <div className="use_flex">
            <div className="havola_box">
              <Fade bottom>
                <h2 className="use_havola_title">Toplinkdan foydalaning</h2>
              </Fade>
              <Fade bottom>
                <p className="use_havola_text">
                  Havolangizga da'vo qilish uchun pastga foydalanuvchi
                  nomingizni kiriting
                </p>
              </Fade>
              <Fade bottom>
                <label className="havola_label">
                  <input
                    className="havola_input"
                    type="text"
                    defaultValue="Toplink.uz/"
                  />
                  <ImLink className="link_icon_use" />
                </label>
              </Fade>
            </div>
            <Fade bottom>
              <div className="use_description_box">
                <div className="use_desc_left">
                  <h2 className="use_desc_title">
                    Bizni minglab odamlar sevadi
                  </h2>
                  <p className="use_desc_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque interdum, felis et bibendum finibus, risus quam
                    sollicitudin neque, eu tristique lorem felis nec massa.
                  </p>
                </div>
                <div className="use_desc_right">
                  <img src={teamSocial} alt="" className="use_desc_pic" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Use;
