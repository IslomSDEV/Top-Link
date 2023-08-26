import React from "react";
import "./Working.css";
import Accaount from "../../assets/Images/workerImg/accaount.svg";
import Using from "../../assets/Images/workerImg/using.svg";
import Content from "../../assets/Images/workerImg/content.svg";

function Working() {
  return (
    <>
      <div className="working">
        <div className="container">
          <h2 className="work_title">U qanday ishlaydi</h2>
          <p className="work_desc">
            Bizning universal havolamiz sizning do'stlaringizga barcha
            kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq
            baham ko'rish imkonini beradi.
          </p>
          <div className="working_flex">
            <div className="work_win_box w1">
              <div className="picture_work">
                <img src={Accaount} alt="" />
              </div>
              <h3 className="work_win_titles">
                Toplinkda hisobingizni yarating
              </h3>
              <p className="work_win_text">
                Foydalanuvchi nomini tanlang, profilingizni sozlang va
                havolalaringizni qo'shing.
              </p>
            </div>
            <div className="work_win_box w2">
              <div className="picture_work">
                <img src={Using} alt="" />
              </div>
              <h3 className="work_win_titles">Linkdan koproq foydalaning</h3>
              <p className="work_win_text">
                Havolani nusxa oling va undan istalgan ijtimoiy platformada
                foydalaning.
              </p>
            </div>
            <div className="work_win_box w3">
              <div className="picture_work">
                <img src={Content} alt="" />
              </div>
              <h3 className="work_win_titles">
                Kontentingizni ko'proq baham ko'ring
              </h3>
              <p className="work_win_text">
                Bitta kuchli havola orqali obunachilaringizga ko'proq
                ma'lumotlarga kirish imkonini bering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
