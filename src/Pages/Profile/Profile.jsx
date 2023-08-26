import React from "react";
import "./Profile.css";
import { Fade } from "react-reveal";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="container">
          <Fade bottom>
            <div className="profile_flex">
              <div className="profile_img_box">
                <img
                  className="profile_pic"
                  src="https://www.toplink.uz/static/media/iPhone.06b5e102e3925e8efb1f.png"
                  alt=""
                />
              </div>
              <div className="profile_desc">
                <h2 className="profile_title">
                  Profilingizni shaxsiylashtiring
                </h2>
                <p className="profile_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque interdum, felis et bibendum finibus, risus quam
                  sollicitudin neque, eu tristique lorem felis nec massa.
                  Pellentesque nec ex in nunc cursus posuere at non augue.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Profile;
