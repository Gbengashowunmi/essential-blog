import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import CustomCard from "./CustomCard";
import "./styles/Architect.scss";
export default function Architect() {
  return (
    <div className="architect-container">
      <span>
        <h3>ARCHITECT</h3>
        <p>
          VIEW ALL
          <AiOutlineRight />
        </p>
      </span>
      <div className="architect">
        <div className="image-container">
          <img
            src="https://4.bp.blogspot.com/-G8KpjvsQrUI/VZDtBxP9xxI/AAAAAAAAKq8/Fbfs8Kxrw_M/s1600/fasion_autumn-fire_101K.jpg"
            alt=""
          />
          <div className="button">
            <button>Future</button>
            <h5>Take a look into the future of technology</h5>
          </div>
        </div>
        <div className="architect-details">
          <span>
            <p>Tien Nugyen</p> <p>2</p>
            <p>
              <AiOutlineClockCircle /> May 21, 2015
            </p>
          </span>
          <p>
            Hi everyone! This is my architectural concept. I wanted to get snowy
            atmosphere. That is quick matte painting sketch. I hope you enjoy
            it! Iphone dolo... R
          </p>
        </div>
      </div>
      <CustomCard src="https://2.bp.blogspot.com/-l8TdL2AWfGk/VZEAICSEAmI/AAAAAAAAKss/-UI-Jm2udIM/w728-rw/architecture_on-wheels_142K.webp" />
      {/* <div className="architect">
        <div className="image-container">
          <img
            src="https://4.bp.blogspot.com/-G8KpjvsQrUI/VZDtBxP9xxI/AAAAAAAAKq8/Fbfs8Kxrw_M/s1600/fasion_autumn-fire_101K.jpg"
            alt=""
          />
          <div className="button">
            <button>Future</button>
            <h5>Take a look into the future of technology</h5>
          </div>
        </div>
        <div className="architect-details">
          <span>
            <p>Tien Nugyen</p> <p>2</p>
            <p>
              <AiOutlineClockCircle /> May 21, 2015
            </p>
          </span>
          <p>
            Hi everyone! This is my architectural concept. I wanted to get snowy
            atmosphere. That is quick matte painting sketch. I hope you enjoy
            it! Iphone dolo... R
          </p>
        </div>
      </div> */}
    </div>
  );
}
