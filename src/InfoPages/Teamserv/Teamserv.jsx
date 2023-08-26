import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import teamS from '../../assets/Data/Delivery.json';
import '../Faq/Faq.css';


function Teamserv() {
    const [showID, setshowID] = useState(0);

  return (
    <>
      <div className="faq">
        <div className="container">
        <h2 className="faq_title">Xizmat ko'rsatish shartlari</h2>
          <div className="faq_flex">
            {teamS.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`${
                    showID == data.id ? "runAcardW" : null
                  } faq_accardion`}
                  onClick={() => setshowID(data.id)}
                >
                  <h2>
                    {data.title}
                    <span>
                      <IoIosArrowDropdownCircle
                        className={`${
                            showID == data.id ? "animationIcon" : null
                        } arrowIconO`}
                      />
                    </span>
                  </h2>
                  <div className={`${showID == data.id ? "runAcardW" : null} text-acard`}>
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

export default Teamserv;
