import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Privace from "../../assets/Data/Privace.json";

function Prives() {
    const [priv, setPriv] = useState(0);
  return (
    <>
      <div className="faq">
        <div className="container">
        <h2 className="faq_title">Maxfiylik siyosati</h2>
        <p className="mini_textAccc">Avgust 31, 2022 da yangilangan</p>
          <div className="faq_flex">
            {Privace.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`${
                    priv == data.id ? "runAcardW" : null
                  } faq_accardion`}
                  onClick={() => setPriv(data.id)}
                >
                  <h2>
                    {data.title}
                    <span>
                      <IoIosArrowDropdownCircle
                        className={`${
                            priv == data.id ? "animationIcon" : null
                        } arrowIconO`}
                      />
                    </span>
                  </h2>
                  <div
                    className={`${
                      priv == data.id ? "runAcardW" : null
                    } text-acard`}
                  >
                    <p>{data.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Prives;
