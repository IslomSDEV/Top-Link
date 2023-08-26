import React from "react";
import ContentPic from "../../assets/Images/workerImg/contents.svg";
import './Content.css';

function Content() {
  return (
    <>
      <div
        className="content"
        style={{ width: "100%", boxSizing: "border-box" }}
      >
        <div className="container">
          <h2 className="content_title">
            Sizning havolalaringiz. Sizning kontentingiz.
          </h2>
          <p className="content_text">
            Har qanday platformadan havola qo'shing. Quyida bizning
            sevimlilarimizdan ba'zilari
          </p>
          <div
            className="image_box_content"
            style={{ width: "100%", height: "100%" }}
          >
            <img src={ContentPic} alt="al" />
          </div>
        </div>
      </div>
    </>
  );
}


export default Content;
