import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import FAQ from "../../assets/Data/FAQ.json";
import "./Faq.css";

function Faq() {
  const [acard, setAcard] = useState(0);
  
  return (
    <>
      <div className="faq">
        <div className="container">
          <h2 className="faq_title">FAQ</h2>
          <div className="faq_flex">
            {FAQ.map((data) => {
              return (
                <div
                  key={data.id}
                  className='faq_accardion'
                  onClick={() => setAcard(data.id)}
                >
                  <h2>
                    {data.title}
                    <span>
                      <IoIosArrowDropdownCircle
                        className={`${
                        acard == data.id ? "animationIcon" : null
                        } arrowIconO`}
                      />
                    </span>
                  </h2>
                  <div className={`${acard == data.id ? "runAcard" : null} text-acard`}>
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

export default Faq;
